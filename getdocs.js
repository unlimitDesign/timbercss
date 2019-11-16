#!/usr/bin/node

'use strict';

const $Fs = require('fs');
const $Path = require('path');
const $Glob = require('glob');
const { JSDOM } = require('jsdom'); // uninstall when done
const $Beautify = require('js-beautify');


const config = {
    srcPath: 'docs-backup/', // use relative path
    targetPath: __dirname + '/src/docs/pages/', // absolute path
}

const beautifyOptions = {
    indent_size: 2,
    end_with_newline: true,
    preserve_newlines: false,
    max_preserve_newlines: 0,
    wrap_line_length: 0,
    wrap_attributes_indent_size: 0,
    unformatted: ['b', 'em']
};


var deleteFolderRecursive = function (path) {
    if ($Fs.existsSync(path)) {
        $Fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if ($Fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                $Fs.unlinkSync(curPath);
            }
        });
        $Fs.rmdirSync(path);
    }
};

/*
Scenario
 1. scane through the target dir. Get location of file (directory) as the categorization label. file path as id. Aggregate in object as database
   - get all the html files under docs-backup( blocks, components, css, layouts, utilities )
 2. process each on
 3. get content area (div.content.clearfix and under)
 4. Fetch title, (title and remove "Timber | " from the string). it will be the label (for now)
 5. Add menu hierarchy in the meta info. (captalize initial letter, replace hyphen with space)
 6. copy file over to the source (with .yml extension). maintain the folder structure
 */

/**
 * YAML front-matter meta info specs
 * title, menu_label, layout (documentation), menu_position, markup_language (html)
 */

// 0. Clean the target directory
deleteFolderRecursive(config.targetPath);
$Fs.mkdirSync(config.targetPath);

// 1. Grab html from the source directory
let srcHtmlFilePaths = getDirs(config.srcPath);

// 2 ~ 5
let srcHtmlFileData = {};
for (const _index in srcHtmlFilePaths) {
    const _absolutePath = srcHtmlFilePaths[_index];
    const _relativePath = $Path.relative(config.srcPath, _absolutePath);
    const _id = _relativePath.replace(/\.html/i, '');
    srcHtmlFileData[_id] = getFileInText(_id, _absolutePath);
}

// 6
for (const _key in srcHtmlFileData) {
    const _yamlData = formatYaml(srcHtmlFileData[_key]);
    const _targetFileFullPath = config.targetPath + _key + '.md';
    ensureDirectoryExistence(_targetFileFullPath);
    $Fs.writeFileSync(_targetFileFullPath, _yamlData);
}

// console.log(srcHtmlFileData[Object.keys(srcHtmlFileData)[0]]);
console.log("Complete. Processed " + Object.keys(srcHtmlFileData).length + " files.");


function getDirs(srcPath) {
    return $Glob.sync(`${srcPath}/**/*.html`, { nodir: true });
}

function getFileInText(id, filePath) {
    const _rawHTML = $Fs.readFileSync(filePath, 'utf8');
    const _htmlTextDom = new JSDOM(_rawHTML);
    const _htmlTextDomDocument = _htmlTextDom.window.document;
    // data parsing
    // remove Timber |
    const _title = _htmlTextDomDocument.querySelector('title').innerHTML.replace(/Timber \| /, '');
    const _contentHtml = _htmlTextDomDocument.querySelector('div.content.clearfix').innerHTML;
    return {
        title: _title,
        menu_label: _title,
        layout: 'documentation',
        category: getCategory(id),
        markup_language: 'html',
        relative_path: id,
        content: $Beautify.html(_contentHtml, beautifyOptions)
    }
}

function getCategory(path) {
    path = path.split('/');
    return (path[0].match(/^index$/i)) ? 'Index' : (path[0].match(/getting-started/i)) ? 'Getting Started' : toTitleCase(path[0].replace(/\-/g, ' '));
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function formatYaml(pageData) {
    let _yamlTextData = '';
    _yamlTextData += '---\n';
    _yamlTextData += 'title: ' + pageData.title + '\n';
    _yamlTextData += 'menu_label: ' + pageData.menu_label + '\n';
    _yamlTextData += 'layout: ' + pageData.layout + '\n';
    _yamlTextData += 'category: ' + pageData.category + '\n';
    _yamlTextData += 'markup_language: ' + pageData.markup_language + '\n';
    _yamlTextData += 'relative_path: ' + pageData.relative_path + '\n';
    _yamlTextData += '---\n\n';
    _yamlTextData += pageData.content;
    return _yamlTextData;
}

function ensureDirectoryExistence(filePath) {
    const _dirname = $Path.dirname(filePath);
    if ($Fs.existsSync(_dirname)) {
        return true;
    }
    ensureDirectoryExistence(_dirname);
    $Fs.mkdirSync(_dirname);
}