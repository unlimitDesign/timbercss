/*
 * based on grunt-csstoc by Benno Mielkehttps://github.com/webinfluenza/grunt-csstoc
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (options = {
    sectionString: 'section',
    tocHead: 'Table Of Contents'
}, files = {}) {
    const $_fs = require('fs');

    const _tocDefines = {
        eof: '\n', /* no CRLF here, assuming Unix line breaks (LF) */
        start: '/**',
        end: ' */',
        startString: ' *   ' + options.tocHead,
        indent: '    ',
        linePrefix: ' *      '
    };

    const _helper = {
        createFileArray: function (filepath) {
            let _fileArray = [];

            // read file content synchronous, split into lines and wrap in quotes
            $_fs.readFileSync(filepath).toString().split(/[\r\n]/).forEach(function (line) {
                _fileArray.push(line + '');
            });

            return _fileArray;
        },
        getTOCArray: function (inputArray) {
            if (typeof inputArray !== "undefined" && inputArray.constructor === Array) {
                let _tocArray = [];

                // loop through the input and check if the acutal array item is a proper TOC entry
                for (let _i = 0, iMax = inputArray.length; _i < iMax; _i++) {
                    const _position = inputArray[_i].indexOf('@' + options.sectionString);

                    if (_position !== -1) {
                        // _position + 1 to remove the @ from the TOC generation in the head later
                        _tocArray.push(inputArray[_i].substring(_position + 1, inputArray[_i].length));
                    }
                }

                return _tocArray;
            }
        },
        writeNewFileWithTOC: function (oldFileContent, tocArray, outputFile) {
            // set the TOC on the head of the file and append the old file contents
            if (typeof oldFileContent !== 'undefined' && tocArray.length > 0) {
                // we're creating the head of the TOC here
                let _newFileContent = _tocDefines.start + _tocDefines.eof + _tocDefines.startString + _tocDefines.eof;

                // indent the TOC entries, insert the section and append a newline
                _newFileContent += _tocDefines.linePrefix + tocArray.join(_tocDefines.eof + _tocDefines.linePrefix);
                _newFileContent += _tocDefines.eof + _tocDefines.end + _tocDefines.eof;

                // the actual content
                _newFileContent += oldFileContent;
                console.log(outputFile, typeof outputFile);
                $_fs.writeFileSync(outputFile, _newFileContent);
            }
        },
        removeOldTOC: function (oldFileArray) {
            // alternative: clear old file and set the content new
            const _position = oldFileArray.indexOf(_tocDefines.startString);

            if (_position > -1) {
                const startPos = [0], /* as we're starting right at the first line of the file */
                    endPosToc = oldFileArray.indexOf(_tocDefines.end),
                    slicedFileArray = oldFileArray.slice(endPosToc + 1, oldFileArray.length);

                return slicedFileArray;
            } else {
                // there seems to be no TOC yet, return unchanged version
                return oldFileArray;
            }
        }
    };
    // Iterate over all specified file groups.
    // files.forEach(function (f) {
    Object.keys(files).forEach(function (currentKey) {
        const _currentFile = files[currentKey];
        // Concat specified files.
        const _src = _currentFile.filter(function (filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!$_fs.existsSync(filepath)) {
                console.log('Source file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        }).map(function (filepath) {
            // Read file source.
            const _oldFileContent = $_fs.readFileSync(filepath).toString(); /* read the file contents */
            // console.log(_oldFileContent);
            const _fileArray = _helper.createFileArray(filepath); /* convert file contents to an array */
            // if there's already a TOC, remove the old one
            const _clearedArray = _helper.removeOldTOC(_fileArray);
            // check the content and find the TOC entries
            const _tocArray = _helper.getTOCArray(_clearedArray);
            // write the new file with the TOC
            _helper.writeNewFileWithTOC(_clearedArray.join(_tocDefines.eof), _tocArray, filepath);

            return _oldFileContent;
        });

        // Print a success message.
        console.log('File "' + _currentFile + '" created.');
    });
};