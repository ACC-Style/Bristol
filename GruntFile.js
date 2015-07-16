module.exports = function(grunt){
	//Project Config
	grunt.initConfig({
		connect:{
			server:{
				options:{
					port: 8000,
					open:{
						target: 'http://localhost:8000', // target url to open
					}
				}
			}
		},
		 uglify: {
            js: {
                files: {'assets/js/app.min.js': 'assets/js/app.js'}
                }
        },
        autoprefixer: {
			main: {
				src: 'assets/css/style.min.css',
			},
		},
		cssmin: {
			  options: {
			    shorthandCompacting: false,
			    roundingPrecision: -1
			  },
			  target: {
			    files: [{
			      expand: true,
			      cwd: 'assets/css',
			      src: ['*.css', '!*.min.css'],
			      dest: 'assets/css',
			      ext: '.min.css'
			    }]
			  }
			},	
		liquid: {
			options: {
			  includes: 'templates/includes'
			},
			pages: {
			  files: [
			    { expand: true, flatten: true, src: 'templates/*.liquid', dest: 'converted-html/', ext: '.html' }
			  ]
			}
		},
		sass:{
			dist:{			
				files:[{
					expand: true,
					cwd: './assets/scss',
					src: ['*.scss'],
					dest: './assets/css',
					ext: '.css'	
				}]
			},
			foundation:{
				files:[{
					expand: true,
					cwd: './bower_components/foundation/scss',
					src: ['*.scss'],
					dest: './assets/css',
					ext: '.css'	
			}]
		}

		},
		styledown: {
		    base: {
		      files: {
		       	'styleguide/base.html': ['assets/css/style.css']
		      },
		      options: {
		        css: [ "assets/css/normalize.min.css",'http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,600,400,300|Roboto+Slab:400,700|Raleway:300','assets/css/jquery-ui.css','assets/css/jquery-ui.structure.css',"assets/css/foundation.min.css",'assets/css/style.css'],
		        js: ['assets/js/jquery-2.1.3.min.js','assets/js/selectonic.min.js','assets/js/jquery-ui.js','assets/js/foundation.min.js','assets/js/knockout.js','assets/js/app.js'],
		        title: 'My Style Guide',
		        sg_css: 'assets/css/styledown.css',
		        sg_js: 'https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js',
		        //config: 'assets/css/config.md'
		      }
		    },
		    admin: {
		      files: {
		       	'styleguide/admin.html': ['assets/css/admin-style.css']
		      },
		      options: {
		               css: [ "assets/css/normalize.min.css",'http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,600,400,300|Roboto+Slab:400,700|Raleway:300','assets/css/jquery-ui.css','assets/css/jquery-ui.structure.css',"assets/css/foundation.min.css",'assets/css/admin-style.css'],
		        js: ['assets/js/jquery-2.1.3.min.js','assets/js/selectonic.min.js','assets/js/jquery-ui.js','assets/js/foundation.min.js','assets/js/knockout.js','assets/js/app.js'],
		        
		        title: 'My Style Guide',
		        sg_css: 'assets/css/styledown.css',
		        sg_js: 'https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js',
		        //config: 'assets/css/config.md'
		      }
		    },
		  },
		copy:{ 
			STYLES: {
			files: [{
				expand: true,
				cwd: 'styleguide/',
				src: '**',
				dest: '//rdstgweb5/stage.tools.acc.org/BaseStyle'
			},
			{
				expand: true,
				cwd: 'styleguide/',
				src: '**',
				dest: '//rdstgweb6/stage.tools.acc.org/BaseStyle'
			}]

			},
			// remoteFolder:{
			// 	expand: true,
			// 	cwd: 'assets/scss',
			// 	src: '**',
			// 	dest:"C:/Users/mwatier/Dropbox/ACC-Markus&Matt/AnticoagBuild/04_Build/AntiCoag/assets/scss"
			// },
			UI:{
				files:[{
					expand: true,
					dot:true,
					cwd:'templates',
					dest:'converted-html/',
					src:['{,**/}*.liquid'],
					rename: function(dest,src){
						return dest + src.replace('.liquid','.html');
					}
				}]

			},
			TFS:{
				files:[
				{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'converted-html/assets/js',
				},
				{
					expand:true,
					cwd:'converted-html/',
					src:'**',
					dest:'C:\tfsonline\ACCApps\Trunk\MembershipApplication\MembershipApplication\UIComponents',


				}]
			},
			INTERNAL:{
				files:[{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'converted-html/assets/js',
				},{
					expand:true,
					cwd:'assets/css',
					src:'**',
					dest:'converted-html/assets/css',
				},{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'styleguide/assets/js',
				},{
					expand:true,
					cwd:'assets/css',
					src:'**',
					dest:'styleguide/assets/css',
				}
				]
			}

		},
		clean: {
			localFolder:["converted-html/**"],
			sassCasheFolder:[".sass-cache/**"]

		},
		watch: { 
			options: {
			    livereload: true,
			  },
			js: {
				files: [ 'assets/js/*.js','templates/includes/scripts.liquid' ],
				tasks: [ 'uglify:js','liquid','copy:INTERNAL' ],
				options: {
					livereload: true,
				}
			},
			scss: {
				files: [ 'assets/scss/*.scss','assets/scss/*/*.scss','assets/scss/*/*/*.scss' ],
				tasks: [ 'clean:sassCasheFolder','sass:dist'],
				options: {
					livereload: true,
				}
			},
			css:{
				files: ['assets/css/style.css','assets/css/style-admin.css',],
				tasks: ['styledown:base','styledown:admin','cssmin', 'copy:INTERNAL'],
				options: {
					livereload:true,
					}
			},
			data: {
				files: [ 
					'templates/*.liquid', 
					'templates/includes/**', 
					'assets/model/*.json' 
				],
				tasks: [ 'liquid'],
				options: {
					livereload: true,
				}				
			}

		}
	});
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-liquid');
	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass-convert');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task.
	grunt.registerTask('serve', [
		'clean:sassCasheFolder',
		'sass:foundation',
		'sass:dist',
		'styledown:base',
		'styledown:admin',
		'clean:sassCasheFolder',
		'liquid',
		'connect',
		'uglify:js',
		'cssmin',
		'copy:INTERNAL',
		'watch'

	]);
	grunt.registerTask('convert', ['sass-convert:lib']);
	grunt.registerTask('movetoserver', ['copy:STYLES']);
	grunt.registerTask('uicopy',['copy:UI','copy:TFS']);
	grunt.registerTask('tfscopy',[
		'clean',
		'sass:dist',
		'liquid',
		'copy:TFS']);
}
