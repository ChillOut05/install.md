var gulp = require('gulp'),
		HubRegistry = require('gulp-hub'),
		hub = new HubRegistry(['./tasks/**/*.js'])

gulp.registry(hub)

gulp.task('default',
	gulp.series('fonts', 'images', 'styles', 'scripts', 'templates')
);

gulp.task('dev',
	gulp.series('default', 'browsersync', 'watch')
);

gulp.task('minify',
	gulp.series('images:min', 'styles:min')
);

gulp.task('production',
	gulp.series('default', 'styles:rtl', 'minify')
);

gulp.task('deploy',
	gulp.series('production', 'archive', 'ssh')
);

gulp.task('validate',
	gulp.series('w3c:html')
);

gulp.task('bootstrap',
	gulp.series('bootstrap')
);
