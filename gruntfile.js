module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			beforeconcat: ['assets/js/src/main.js'] // all we really want is for jshints to be turned on not to actually fail the file !
		},
		uglify: {
			files: {
				src: [ 'assets/js/src/**/*.js' ],  // source files mask
				dest: 'assets/js/min/main.min.js',    // destination folder
				flatten: true,   // remove all unnecessary nesting
				ext: '.min.js'   // replace .js to .min.js
			}
		},
		sass: {
			options: {
				style: 'extended',
				// compass: true
			},
			dist: {
				files: {
					'assets/css/style.css': 'assets/sass/style.scss'
				},
			},
		},

		watch: {
			scripts: {
				files: ['assets/js/src/**/*.js'],
				tasks: ['uglify'],
				options: { nospawn: true }
			},
			lint: {
				files: ['assets/js/src/main.js'], // don't need to lint plugins
				tasks: ['jshint'],
				options: { nospawn: true }
			},
			sass: {
				files: ['assets/sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					nospawn: true,
					livereload: true
				}
			}
		},
		modernizr: {
			dist: {
				// [REQUIRED] Path to the build you're using for development.
				"devFile" : "assets/js/vendor/modernizr-dev-2.8.2.js",

				// [REQUIRED] Path to save out the built file.
				"outputFile" : "assets/js/vendor/modernizr-custom.min.js",

				// Based on default settings on http://modernizr.com/download/
				"extra" : {
					"shiv" : true,
					"printshiv" : false,
					"load" : true,
					"mq" : false,
					"cssclasses" : true
				},

				// Based on default settings on http://modernizr.com/download/
				"extensibility" : {
					"addtest" : false,
					"prefixed" : false,
					"teststyles" : false,
					"testprops" : false,
					"testallprops" : false,
					"hasevents" : false,
					"prefixes" : false,
					"domprefixes" : false
				},

				// By default, source is uglified before saving
				"uglify" : true,

				// Define any tests you want to implicitly include.
				"tests" : [],

				// By default, this task will crawl your project for references to Modernizr tests.
				// Set to false to disable.
				"parseFiles" : true,

				// When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
				// You can override this by defining a "files" array below.
				"files" : {
					"src": ['assets/css/**/*.css','assets/js/src/main.js'] // these may have to be changed depending on plugin dependencies 
				},

				// When parseFiles = true, matchCommunityTests = true will attempt to
				// match user-contributed tests.
				"matchCommunityTests" : false,

				// Have custom Modernizr tests? Add paths to their location here.
				"customTests" : []
			}
		}
	});
	// Default task(s).
	grunt.registerTask('default', ['uglify','sass','jshint','modernizr']);

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// let's get sassy
	grunt.loadNpmTasks('grunt-contrib-sass');

	//watch files change
	grunt.loadNpmTasks('grunt-contrib-watch');

	// jshint
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// modernizr
	grunt.loadNpmTasks("grunt-modernizr");

};