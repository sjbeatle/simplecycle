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
		  build: ["build"]
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
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [
			'jshint',
			'clean:build',
			'webpack:sc',
			'copy:static'
		]);

};
