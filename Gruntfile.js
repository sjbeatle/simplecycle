module.exports = function(grunt) {

	var ExtractTextPlugin = require("extract-text-webpack-plugin");

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		clean: {
			build: ["build"],
			test: [
				"test",
				"_SpecRunner.html"
			]
		},
		webpack: {
			sc: {
				entry: "./src/js/base.js",
				output: {
					path: "build/",
					filename: "simple-cycle.js",
				},
				module: {
					loaders: [
						{ test: /\.html$/, loaders: ['html'] },
						{ test: /\.json$/, loaders: ['json'] },
						{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
					]
				},
				plugins: [
					new ExtractTextPlugin('simple-cycle.css')
				]
			}
		},
		copy: {
			static: {
				expand: true,
				cwd: 'static',
				src: '**',
				dest: 'build/'
			},
			tests: {
				files: [
					{
						expand: true,
						cwd: 'src',
						src: ['**/__tests__/**/*.js'],
						dest: 'test/unit/specs',
						rename: function(dest, src) {
							/**
							 * Example:
							 * `component/__tests__/exampleSpec.js` from src/ becomes...
							 * `component/exampleSpec.js` in test/
							 */
							var path = require('path');
							var filenameArr = src.split(path.sep);
							var indexOfTests = filenameArr.indexOf('__tests__');
							filenameArr.splice(indexOfTests, 1);
							return dest + path.sep + filenameArr.join(path.sep);
						}
					}
				]
			}
		},
		jasmine: {
			default: {
				src: [
					'build/simple-cycle.js'
				],
				options: {
					display: 'full',
					specs: [
						'test/unit/specs/**'
					],
					junit: {
						path: 'test/unit/reports/junit',
						consolidate: true
					},
					templateOptions: {
						coverage: 'test/unit/reports/coverage/coverage.json',
						report: { type: 'lcov', options: { dir: 'test/unit/reports/coverage' } },
					},
					keepRunner: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', [
			'jshint',
			'clean:build',
			'webpack:sc',
			'copy:static'
		]);

	grunt.registerTask('test', [
			 'clean:test',
			 'copy:tests',
			 'jasmine',
			 'clean:test'
		]);

};
