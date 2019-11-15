'use strict';

const $Fs = require('fs');
const $Path = require('path');
const $Glob = require('glob');

/*
 1. get all the html files under docs-backup
 2. process each on
 3. get content area (div.content.clearfix and under)
 4. Fetch title, (title and remove "Timber | " from the string). it will be the label (for now)
 5. Add menu hierarchy.