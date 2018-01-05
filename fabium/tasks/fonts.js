var globals = require('../globals.js')

var src = globals.getPath( globals.config.paths.src.fonts.all ),
		dest = globals.getPath( globals.config.paths.dist.fonts.path )

function fonts() {
	return globals.gulp.src( globals.config.paths.src.fonts.all )
		.pipe(
			globals.$.plumber({
				errorHandler: globals.consoleError
			})
		)
		.pipe(
			globals.$.newer( globals.config.paths.dist.fonts.path )
		)
		.pipe( globals.gulp.dest( globals.config.paths.dist.fonts.path ) );
};

globals.gulp.task('fonts', fonts)

module.exports = fonts;
