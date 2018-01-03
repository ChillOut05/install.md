var globals = require('../globals.js')

var src = globals.getPath( globals.config.paths.src.templates.all ),
		dest = globals.getPath( globals.config.paths.dist.path )

var emitty = require('emitty').setup(globals.config.paths.src.templates.path, 'pug')

function templates() {
	return globals.gulp.src( globals.config.paths.src.templates.all )
		.pipe(
			globals.$.if(
				global.isWatching,
				emitty.stream()
			)
		)
		.pipe(
			globals.$.filter(
				function(file) {
					return /[\\\/]pages/.test(file.path);
				}
			)
		)
		.pipe(
			globals.$.pug({
				pretty: true
			})
		)
		.pipe( globals.$.rename({dirname: '.'}) )
		.pipe( globals.gulp.dest( globals.config.paths.dist.path ) );
};

globals.gulp.task('templates', templates);

module.exports = templates;
