module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		csstoc: {
			dist: {
				options: {
					sectionString: 'section',
        			tocHead: 'Boilerplate - Table Of Contents'
				},
				files: {
					'dist/css/timber.css': [ 'dist/css/timber.css' ]
				}
			}
		}
	});

  // Table of contents
  grunt.loadNpmTasks('grunt-csstoc');

  // Default task(s).
  grunt.registerTask('default', ['csstoc']);
};