const TimberTools = require('./TimberTools.js');

class TimberToolsUpdateDocPages extends TimberTools {
    apply(compiler) {
        compiler.hooks.watchRun.tap('WatchRun', (comp) => {
            const changedTimes = comp.watchFileSystem.watcher.mtimes;
            const changedFiles = Object.keys(changedTimes)
                .map(file => `\n  ${file}`)
                .join('');
            if (changedFiles.length) {
                console.log("====================================")
                console.log('NEW BUILD FILES CHANGED:', changedFiles);
                console.log("====================================")
            }
        });
    }
}

module.exports = TimberToolsUpdateDocPages;