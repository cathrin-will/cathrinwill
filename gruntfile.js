module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			beforeconcat: ['src/js/main.js', 'src/js/base/plugins/**.js'] // all we really want is for jshints to be turned on not to actually fail the file !
		},
		uglify: {
			options: {
				'report' : 'min',
				sourceMap: true,
				mangle: true,
				preserveComments: 'all'
				// beautify: true,
			},
			files: {
				src: [ 'src/js/base/vendor/*.js','src/js/base/plugins/*.js','src/js/main.js' ],
				dest: 'dist/js/main.min.js',
				flatten: true,
				ext: '.min.js'
			}
		},
		sass: {
			options: {
				style: 'extended'
				// style: 'compressed'
				// compass: true
			},
			dist: {
				files: {
					'dist/css/main.css': 'src/sass/main.scss'
				},
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('pixrem')(), // add fallbacks for rem units
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					require('cssnano')({ zindex: false }) // minify the result
				]
			},
			files: {
				expand: true,
				cwd: 'dist/css/',
				src: ['**/*.css'],
				dest: 'dist/css/'
			}
		},
		tinypng: {
			options: {
				apiKey: 'fzeWdn5xkPkiOXTmhRDaZ9DLvKvp7wnn',
				checkSigs: true,
				sigFile: 'src/img/file_sigs.json',
				summarize: true,
				showProgress: true,
				stopOnImageError: true
			},
			compress: {
				expand: true,
				cwd: 'src/img/',
				src: ['**/*.{jpg,png}'],
				dest: 'dist/img/'
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 3,
			},
			compress: {
				expand: true,
				cwd: 'src/img/',
				src: ['**/*.{gif,svg}'],
				dest: 'dist/img/'
			}
		},
		copy: {
			fonts: {
				nonull: true,
				expand: true,
				cwd: 'src/fonts/',
				src: ['**'],
				dest: 'dist/fonts/'
			},
			cv: {
				nonull: true,
				expand: true,
				cwd: 'src/cv/',
				src: ['**'],
				dest: 'dist/cv/'
			},
			js: {
				nonull: true,
				expand: true,
				cwd: 'src/js/vendor/',
				src: ['jquery**'],
				dest: 'dist/js/vendor/'
			},
		},
		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['uglify','insert_timestamp:js'],
				options: { nospawn: true }
			},
			lint: {
				files: ['src/js/main.js'], // don't need to lint plugins
				tasks: ['jshint'],
				options: { nospawn: true }
			},
			css: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass', 'postcss','insert_timestamp:css']
			},
			copy: {
				files: ['src/js/vendor/','src/fonts/'],
				tasks: ['copy']
			},
			images: {
				files: ['src/img/'],
				tasks: ['imagemin','tinypng']
			}
		},
		modernizr: {
			dist: {
			"parseFiles": true,
				"customTests": [],
				"devFile": "src/js/vendor/modernizr-custom.js",
				"dest": "dist/js/vendor/modernizr-custom.min.js",
				"tests": [],
				"options": [
					"setClasses"
				],
				"uglify": true
			}
		},
		insert_timestamp: {
			options: {
				prepend: true,
				append: false,
				format: 'yyyy-mm-dd HH:MM:ss o',
				template: '/* {timestamp} */',
				datetime: new Date(),
				insertNewlines: true
			},
			css: {
				options: {
					prepend: false,
					append: true,
					template: '/*! CSS compiled on: {timestamp} */'
				},
				files: [{
					expand: true,
					cwd: 'dist/css',
					src: ['**/*.css'],
					dest: 'dist/css',
					ext: '.css'
				}]
			},
			js: {
				options: {
					format: false,
					template: '// JS compiled on: {timestamp}\n\n',
					insertNewlines: false
				},
				files: [{
					expand: true,
					cwd: 'dist/js',
					src: ['**/*.min.js'],
					dest: 'dist/js',
					ext: '.min.js'
				}]
			}
		},
	});

	// runs everything but watch,  and modernizr
	grunt.registerTask('default', ['sass','postcss','copy','imagemin','tinypng','uglify','insert_timestamp']); // Default task(s)
	// runs everything but watch
	grunt.registerTask('all', ['sass','postcss','modernizr', 'copy','imagemin','tinypng','uglify','insert_timestamp','jshint']);
	// runs all image minifiers
	grunt.registerTask('images', ['imagemin','tinypng']);
	// create finished css
	grunt.registerTask('sassy', ['sass', 'postcss','insert_timestamp']);

	grunt.registerTask('min', ['uglify','insert_timestamp']);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-tinypng');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-insert-timestamp');
};
