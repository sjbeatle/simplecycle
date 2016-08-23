module.exports = function(grunt) {

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
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', [
			'jshint',
			'clean:build',
			'webpack:sc'
		]);

};
