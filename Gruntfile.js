module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		stylus: {
			development: {
				options: {
					paths: ["./css"],
					yuicompress: true,
					define: {
						import_tree: require('stylus-import-tree')
					}
				},
				files: {
					"./main.css": "./main.styl"
				}
			}
		},
		watch: {
			files: ["./main.styl"],
			tasks: ["stylus"]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ["stylus","watch"]);
	grunt.registerTask('prod', ["stylus"]);
};
