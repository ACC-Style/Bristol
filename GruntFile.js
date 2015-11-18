module.exports = function(grunt){
	//Project Config
	grunt.initConfig({
		 connect:{
      server:{
        options:{
			livereload:true,
          	port: 8000,
          	open:{
            target: 'http://localhost:8000', // target url to open
          },
        //keepalive:true,
        }
      }
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
			styleguide:{			
				files:[{
					expand: true,
					cwd: './assets/scss',
					src: ['*.scss'],
					dest: './styleguide/Assets/css',
					ext: '.css'	
				}]
			},
			foundation:{
				files:[{
					expand: true,
					cwd: './assets/scss/vendor/foundation',
					src: ['*.scss','_foundation-override/*.scss'],
					dest: './assets/css',
					ext: '.css'	
			}]
		}

		},
		styledown: {
		    base: {
		      files: {
		       	'styleguide/index.html': 'assets/css/index.css',
		      },
		      options: {
		        css: [ "assets/css/normalize.min.css",'http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,600,400,300|Roboto+Slab:400,700|Raleway:300','assets/css/jquery-ui.css','assets/css/jquery-ui.structure.css',"assets/css/foundation.min.css",'assets/css/index.css'],
		        js: ['assets/js/jquery-2.1.3.min.js','assets/js/selectonic.min.js','assets/js/chosen/chosen.jquery.min.js','assets/js/jquery-ui.js','assets/js/foundation.min.js','assets/js/knockout.js','assets/js/app.js'],
		        title: 'My Style Guide',
		        sg_css: 'assets/css/styledown.css',
		        sg_js: 'assets/js//styledown.js',
		        //config: 'assets/css/config.md'
		      }
		    }


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
			INTERNAL:{
				files:[
				{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'styleguide/assets/js',
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:'index.*',
					dest:'styleguide/assets/css',
				},{
					expand:true,
					cwd:'assets/img',
					src:'**',
					dest:'styleguide/assets/img',
				},{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'converted-html/assets/js',
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:['index.*','foundaiton.*','font-awesome.*','jquery-ui','styledown.*'],
					dest:'converted-html/assets/css',
				},{
					expand:true,
					cwd:'assets/img',
					src:'**',
					dest:'converted-html/assets/img',
				}
				]
			}

		},
	    watch: {
	    	options: {
			      livereload: true,
			    },
			js: {
			files: [ 'Assets/js/*.js','templates/includes/scripts.liquid' ],
			tasks: [ 'liquid','copy:INTERNAL' ],

			},
			data: {
			files: [ 'templates/**' ],
			tasks: [ 'liquid'],

			},
			scss: {
			files: [ 'Assets/scss/*.scss','Assets/scss/*/*.scss','Assets/scss/*/*/*.scss' ],
			tasks: [ 'sass:dist','cssmin','styledown:base','copy:INTERNAL'],

			}
	    },
		clean: {
			localFolder:["converted-html/**"],
			sassCasheFolder:[".sass-cache/**"]

		},
	});
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-liquid');
	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass-convert');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task.
	grunt.registerTask('build', [
		'connect',
		'sass:foundation',
		'sass:dist',
		'cssmin',
		'copy:INTERNAL',
		'styledown',
		'watch',
		
	]);
	grunt.registerTask('serve', [
		'connect',]);
}
