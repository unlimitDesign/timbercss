#!/usr/bin/node

'use strict';

/**
 * Called from npm script. (npm run start) for development.
 * Removes docs/ directory then create a blank docs/ directory. Then Compiles documentation under docs/. (timber.build-documentation.js)
 */

// currently this script is not intended for use from webpack.

/**
 *  See the end of this file where the following class is instantiated.
 */

const TimberTools = require('./timber.js');

const $Fs = require('fs-extra');
const $Path = require('path');
const $Glob = require('glob');
const $MetadataParser = require('markdown-yaml-metadata-parser');
const { JSDOM } = require('jsdom'); // uninstall when done
const $Beautify = require('js-beautify');

const mode = (process.argv[process.argv.indexOf('--mode') + 1]) ? process.argv[process.argv.indexOf('--mode') + 1] : 'development';

class TimberTools_documentation extends TimberTools {

    constructor() {
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
        super();
        // variable for this class
        // used for caching layout templates and version number
        this.timberDocs = {
            mode: mode,
            version: this.options.version,
            timberJsFileName: this.options.timberJsFileName,
            timberJsMinFileName: this.options.timberJsMinFileName,
            timberCssFilePath: this.options.timberCssFilePath,
            timberCssFileMinPath: this.options.timberCssFileMinPath,
        };
    }

    /**
     * Plan
     * 1. Remove docs/ directory
     * 2. Create a blank docs/ directory
     * 3. Compile documentation under docs/
     *  a. Scan through `src/docs/pages` directory for id and category of all the pages
     *  b. Create a dom fragment for navigation that is used for injecting to each page (documentation layout).
     *  c. Compile each page and copy under docs/
     *  d. Copy images/ and css/ file from src/public/
     */
    main() {
        // reference to the option. for shorthand.
        const _options = this.options;
        // Frequently used constants
        const _contentBase = this.getAbsolutePath(_options.contentBase);
        const _contentSourceDir = this.getAbsolutePath(_options.contentSourceDir);
        console.log("Initiating Timber CSS Documentation Build Process");
        /**
         * 1. Remove docs/ directory
         */
        this.rmDirRF(_contentBase + '/blocks');
        this.rmDirRF(_contentBase + '/components');
        this.rmDirRF(_contentBase + '/getting-started');
        this.rmDirRF(_contentBase + '/utilities');
        /**
         * 2. Create a blank docs/ directory
         */
        //  $Fs.mkdirSync(_contentBase);
        /**
         * 3. Compile documentation under `docs/`
         */
        // a. Scan through `src/docs/pages` directory for id and category of all the pages
        const _pageData = this.scanAndGetPageIdAndCategories(_contentSourceDir);
        // b. Create a dom fragment for navigation that is used for injecting to each page (documentation layout).
        const _htmlFragmentForSidenav = this.generateHtmlForSidenav(_pageData);
        // c. Compile each page and copy under docs/
        this.compileMdIntoHtml(_contentSourceDir, _contentBase, _pageData, _htmlFragmentForSidenav);
        // d. Copy images/ and css/ file from src/public/
        $Fs.copy(_contentSourceDir + '/public/css', _contentBase + '/css');
        $Fs.copy(_contentSourceDir + '/public/images', _contentBase + '/images');
        console.log("Compiled " + Object.keys(_pageData).length + " pages.");
    }

    /**
     * Removes a directory (rm -rf )
     *
     * @param   {string}  targetDirToRemove  Path of directory to be removed
     */
    rmDirRF(targetDirToRemove) {
        const removeDirectoryRecursively = function (path) {
            if ($Fs.existsSync(path)) {
                $Fs.readdirSync(path).forEach(function (file, index) {
                    const curPath = path + "/" + file;
                    if ($Fs.lstatSync(curPath).isDirectory()) { // recurse
                        removeDirectoryRecursively(curPath);
                    } else { // delete file
                        $Fs.unlinkSync(curPath);
                    }
                });
                $Fs.rmdirSync(path);
            }
        };
        removeDirectoryRecursively(targetDirToRemove);
    }

    /**
     * Scan and Get Page Id And Categories
     *
     * @param   {string}  tagetDir  Directory where the source md files are.
     *
     * @return  {object}            {metadata:{title,menu_label,layout,category:[Array], markup_language},content}
     */
    scanAndGetPageIdAndCategories(tagetDir) {
        const _targetPagePaths = $Glob.sync(`${tagetDir}/pages/**/*.md`, { nodir: true });
        let _pageData = [];
        for (const _index in _targetPagePaths) {
            const _currentTargetPath = _targetPagePaths[_index];
            const _id = _currentTargetPath.replace(/^.*\/pages\//, '');
            const _mdText = $Fs.readFileSync(_currentTargetPath, 'utf8');
            const _mdData = $MetadataParser(_mdText);
            // set
            _pageData[_id] = _mdData;
        }
        return _pageData;
    }

    /**
     * Gets layoute templates and caches them
     *
     * @param   {string}  contentSourceDir  Source directory
     * @param   {string}  layoutId          Layout ID
     *
     * @return  {string}                    Layout templates html
     */
    getPageLayoutTemplate(contentSourceDir, layoutId) {
        if (layoutId in this.timberDocs) {
            return this.timberDocs[layoutId];
        }
        const _layoutAbsolutePath = contentSourceDir + '/layouts/' + layoutId + '.html';
        if ($Fs.existsSync(_layoutAbsolutePath)) {
            let _layoutText = $Fs.readFileSync(_layoutAbsolutePath, 'utf8');
            // making sure that the js file name is correct
            _layoutText = _layoutText.replace(/{{\s?timber_js_filename\s?}}/, (this.timberDocs.mode === 'development') ? this.timberDocs.timberJsFileName : this.timberDocs.timberJsMinFileName);
            _layoutText = _layoutText.replace(/{{\s?timber_css_filename\s?}}/, (this.timberDocs.mode === 'development') ? this.timberDocs.timberCssFilePath : this.timberDocs.timberCssFileMinPath);
            // version name for documentation
            this.timberDocs[layoutId] = (layoutId === 'documentation') ? _layoutText.replace(/{{\s?library_version\s?}}/, this.timberDocs.version) : _layoutText;
            return this.timberDocs[layoutId];
        } else {
            return false;
        }
    }

    /**
     * Generates Html for sidenav
     *
     * @param   {object}  pageData  Associative array with key as full file path with content and metadata of pages
     *
     * @return  {string}            Sidenav html in string
     */
    generateHtmlForSidenav(pageData) {
        const _sidenavTemplateHtmlDom = new JSDOM(this.getSidenavTemplateHtml());
        const _htmlTextDomDocument = _sidenavTemplateHtmlDom.window.document;
        for (const _key in pageData) {
            const _currentData = pageData[_key];
            const _currentMetaData = _currentData.metadata;
            const _menuCategoryId = this.getMenuID(_currentMetaData.category);
            if (_menuCategoryId in _sidenavTemplateHtmlDom.window) {
                const _targetMenuUl = _sidenavTemplateHtmlDom.window[_menuCategoryId];
                const _currentMenuRelativeUrl = _key.replace(/\.md$/, '.html');
                const _currentMenuElement = _htmlTextDomDocument.createElement("li");
                _currentMenuElement.innerHTML = `<a class="color-grey-dark color-hover-grey-darkest color-active-blue" href="../${_currentMenuRelativeUrl}">${_currentMetaData.menu_label}</a>`;
                _targetMenuUl.appendChild(_currentMenuElement);
            }
        }
        return _sidenavTemplateHtmlDom.window.document.body.innerHTML;
    }

    /**
     * Get menu id from category array
     *
     * @param   {Array}  pageCategories  Array containing page category in string
     *
     * @return  {string}                  Page category slug
     */
    getMenuID(pageCategories) {
        return 'menu-' + pageCategories.join('-').replace(/\s/g, '-').toLowerCase();
    }

    /**
     * Compile md pages and copy to appropriate locations.
     *
     * @param   {string}  contentSourceDir        Absolute path to where content source pages are.
     * @param   {string}  contentBase             Absolute path to where docs are saved.
     * @param   {object}  pageData                Page data with contents and metadata
     * @param   {string}  htmlFragmentForSidenav  HTML Fragments of side navigation.
     */
    compileMdIntoHtml(contentSourceDir, contentBase, pageData, htmlFragmentForSidenav) {
        const _beautifyOptions = {
            indent_size: 2,
            end_with_newline: true,
            preserve_newlines: false,
            max_preserve_newlines: 0,
            wrap_line_length: 0,
            wrap_attributes_indent_size: 0,
            unformatted: ['b', 'em']
        };

        for (const _key in pageData) {
            const _outputUrl = contentBase + '/' + _key.replace(/\.md$/, '.html');
            const _currentData = pageData[_key];
            let _htmlToWriteAsFile = this.getPageLayoutTemplate(contentSourceDir, _currentData.metadata.layout);
            // title
            _htmlToWriteAsFile = _htmlToWriteAsFile.replace(/{{\s?page_title\s?}}/, _currentData.metadata.title);
            // content
            _htmlToWriteAsFile = _htmlToWriteAsFile.replace(/{{\s?page_content\s?}}/, _currentData.content);
            // inject sidenav
            if (_currentData.metadata.layout === 'documentation') {
                // <!-- {{ sidebar }} -->
                _htmlToWriteAsFile = _htmlToWriteAsFile.replace(/(<\!--\s?)?{{\s?sidebar\s?}}(\s?-->)?/, htmlFragmentForSidenav);
            } else if (_currentData.metadata.layout === 'index') {
                _htmlToWriteAsFile = _htmlToWriteAsFile.replace(/{{\s?library_version\s?}}/, this.timberDocs.version);
            }
            // making sure that directory exists
            this.mkdirForFile(_outputUrl);
            // save html file
            $Fs.writeFileSync(_outputUrl, $Beautify.html(_htmlToWriteAsFile, _beautifyOptions));
        }
    }

    /**
     * Make directory for a file.
     *
     * @param   {string}  filePath  Path to file
     *
     * @return  {boolean}            Returns false if file does not exist.
     */
    mkdirForFile(filePath) {
        const _dirname = $Path.dirname(filePath);
        if ($Fs.existsSync(_dirname)) {
            return true;
        }
        this.mkdirForFile(_dirname);
        $Fs.mkdirSync(_dirname);
    }

    /**
     * Returns a full text of sidebar navigation html template
     *
     * @return  {string}  html text of the sidebar navigation template
     */
    getSidenavTemplateHtml() {
        return `
            <!-- Sidebar -->
            <aside id="collapsable-sidebar" class="col w-3/12 w-md-full order-1 sidebar left collapsable-target active-md inactive-md overflow-visible overflow-md-hidden">
                <div class="freeze pb-30 pst-100" data-extra-space-top="100" data-extra-space-bottom="0" data-push-section=".pagination-3">
                    <div class="pb-30 border-md border-md-b border-md-2 border-grey-lightest">
                        <div class="h-screen h-md-auto overflow-y-scroll">
                            <h4 class="color-black">Getting Started</h4>
                            <ul class="list-none" id="menu-getting-started">
                                <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                            </ul>
                            <h4 class="mt-0">
                                <a href="#collapsable-utilities" class="collapsable color-grey-dark color-active-black" data-include-margin>Utilities <span class="icon-material mb-0">keyboard_arrow_down</span></a>
                            </h4>
                            <div id="collapsable-utilities" class="collapsable-target">
                                <div class="pb-10">
                                    <h6 class="uppercase tracking-wide">Layout</h6>
                                    <ul class="list-none" id="menu-utilities-layout">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Typography</h6>
                                    <ul class="list-none" id="menu-utilities-typography">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Background</h6>
                                    <ul class="list-none" id="menu-utilities-background">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Border</h6>
                                    <ul class="list-none" id="menu-utilities-border">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Spacing</h6>
                                    <ul class="list-none" id="menu-utilities-spacing">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Sizing</h6>
                                    <ul class="list-none" id="menu-utilities-sizing">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Color</h6>
                                    <ul class="list-none" id="menu-utilities-color">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Effects</h6>
                                    <ul class="list-none" id="menu-utilities-effects">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                    <h6 class="uppercase tracking-wide">Interactivity</h6>
                                    <ul class="list-none" id="menu-utilities-interactivity">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                </div>
                            </div>
                            <h4 class="mt-0">
                                <a href="#collapsable-components" class="collapsable color-grey-dark color-active-black" data-include-margin>Components <span class="icon-material mb-0">keyboard_arrow_down</span></a>
                            </h4>
                            <div id="collapsable-components" class="collapsable-target">
                                <div class="pb-10">
                                    <ul class="list-none" id="menu-components">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                </div>
                            </div>
                            <h4 class="mt-0">
                                <a href="#collapsable-partials" class="collapsable color-grey-dark color-active-black" data-include-margin>Blocks <span class="icon-material mb-0">keyboard_arrow_down</span></a>
                            </h4>
                            <div id="collapsable-partials" class="collapsable-target">
                                <div class="pb-10">
                                    <ul class="list-none" id="menu-blocks">
                                        <!-- li a.color-grey-dark.color-hover-grey-darkest.color-active-blue[href=""]{page_label} -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- Sidebar End -->
        `;
    }
}

/**
 * Run the task
 */
const $TimberTools_documentation = new TimberTools_documentation();
$TimberTools_documentation.main();
