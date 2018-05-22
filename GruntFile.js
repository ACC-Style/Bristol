module.exports = function(grunt){
	require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
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
					keepalive:true,
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
		 bower: {
		    install: {
		       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
		    }
		  },
		liquid: {
			options: {
			  includes: 'templates/includes'
			},
			pages: {
			  files: [
			    { expand: true, flatten: true, src: 'templates/*.liquid', dest: 'docs/', ext: '.html' }
			  ]
			}
		},
		sass:{

			dist:{
				options: {                       // Target options
			        style: 'expanded',
			        noCache: true
			      },			
				files:[{
					expand: true,
					cwd: './assets/scss',
					src: ['*.scss'],
					dest: './assets/css',
					ext: '.css'	
				}]
			},
			vendor:{
				files:[{
					expand: true,
					noCache: true,
					cwd: './assets/scss/vendor',
					src: ['**.scss','*/**.scss','*/**.**.scss','/jquery-ui/jquery-ui.structure.scss','/foundation-sites/vendor/*.scss','/jquery-ui/*'],
					dest: './assets/css',
					ext: '.css',
					flatten:true	
			}]
		}

		},
		styledown: {
		    base: {
		      files: {
		       	'styleguide/index.html': 'assets/css/index.css',
		      },
		      options: {
		        css: [ 
		        	'http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,600,400,300|Roboto+Slab:400,700|Raleway:300',
		        	'assets/css/jquery-ui.css',
		        	'assets/css/jquery-uistructure.css',
		        	"assets/css/font-awesome.css",
		        	"assets/css/foundation-sites.css",
		            'assets/css/index.css'],

		        js: [
		        	'../bower_components/jquery/dist/jquery.js',
		        	'../bower_components/selectonic/dist/selectonic.js',
		        	'../bower_components/chosen/chosen.jquery.js',
		        	'../bower_components/jquery-ui/jquery-ui.js',
		        	'../bower_components/knockout/dist/knockout.js',
					'../bower_components/waypoints/lib/jquery.waypoints.js',
					'../bower_components/waypoints/lib/shortcuts/sticky.js',
					'../bower_components/foundation-sites/dist/foundation.js',
					'assets/js/app-styleguide.js'],

		        title: 'My Style Guide',
		        sg_css: 'assets/css/styledown.css',
		        sg_js: 'assets/js//styledown.js',
		        //config: 'assets/css/config.md'
		      }
		    }


		  },
		copy:{ 
			STYLES:{
				files:[
				{
					expand:true,
					cwd:'assets/css',
					src:['**','!**.map'],
					dest:'docs/assets/css'
				},{
					expand:true,
					cwd:'assets/css',
					src:['**','!**.map'],
					dest:'styleguide/assets/css'
				}
				]},
			BOWER:{
				files:[
					{
					  expand:true,
					  cwd:'bower_components/jquery/dist',
					  src:['**.js','**.map'],
					  dest:'assets/js'
					},
					{
					  expand:true,
					  cwd:'bower_components/foundation-sites/dist',
					  src:['**.js','**.map'],
					  dest:'assets/js'
					},{
					  expand:true,
					  cwd:'bower_components/foundation-sites/_vendor',
					  src:['**'],
					  dest:'assets/scss/vendor/_vendor'
					},
					{
					  expand:true,
					  cwd:'bower_components/foundation-sites/scss',
					  src:['**'],
					  dest:'assets/scss/vendor/foundation-sites'
					},
					{
					  expand:true,
					  cwd:'bower_components/knockout/dist',
					  src:['**.js','**.map'],
					  dest:'assets/js'
					},
					{
					  expand:true,
					  cwd:'bower_components/waypoints/lib',
					  src:['**.js','**.map'],
					  dest:'assets/js'
					},
					{
					  expand:true,
					  cwd:'bower_components/pagerjs/dist',
					  src:['**.js','**.map'],
					  dest:'assets/js'
					},
					{
					  expand:true,
					  cwd:'bower_components/foundation-sites/dist',
					  src:['**.css','**.map'],
					  dest:'assets/css'
					},
					{
					  expand:true,
					  cwd:'bower_components/animate.css',
					  src:['**.css','**.map'],
					  dest:'assets/css'
					}
				]
			},
			BOWEROVERRIDES:{
				files:[{
					expand:true,
					cwd:'assets/scss/vendor/foundation',
					src:['_settings.scss'],
					dest:'assets/scss/vendor/foundation-sites/settings'
				}]
			},
			INTERNAL:{
				files:[
				{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'docs/assets/js'
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:['**','!**.map'],
					dest:'docs/assets/css'
				},{
					expand:true,
					cwd:'assets/img',
					src:'**',
					dest:'docs/assets/img'
				},{
					expand:true,
					cwd:'assets/fonts',
					src:'**',
					dest:'docs/assets/fonts'
				},{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'styleguide/assets/js'
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:['**','!**.map'],
					dest:'styleguide/assets/css'
				},{
					expand:true,
					cwd:'assets/scss',
					src:'**',
					dest:'styleguide/assets/scss'
				},{
					expand:true,
					cwd:'assets/img',
					src:'**',
					dest:'styleguide/assets/img'
				},{
					expand:true,
					cwd:'assets/fonts',
					src:'**',
					dest:'styleguide/assets/fonts'
				}
				]
			},
			FOUNDATIONSETTINGS:{
			files:[
				{
				  expand:true,
				  cwd:'assets/scss/vendor/foundation',
				  src:['_override.settings.scss'],
				  dest:'assets/scss/vendor/foundation-sites/settings'
				},
				]
			}
		},
		postcss: {
    options: {
      map: true, // inline sourcemaps

      // or
      map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'assets/css/maps/' // ...to the specified directory
      },

      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: 'assets/css/*.css'
    }
  },
	    watch: {
	    	options: {
			      livereload: true,
			    },
			js: {
			files: [ 'assets/js/*.js' ],
			tasks: [ 'liquid','copy:INTERNAL' ],

			},
			data: {
			files: [ 'templates/**' ],
			tasks: [ 'liquid'],

			},
			scss: {
			files: [ 'assets/scss/*.scss','assets/scss/**'],
			tasks: [ 'sass:dist','sass:vendor','postcss','styledown:base','copy:STYLES']
			},
			index:{
			files: [ 'assets/scss/index.scss'],
			tasks: [ 'sass:vendor','sass:dist','postcss','styledown:base','copy:INTERNAL']	
			}
	    },
		clean: {
			localFolder:["docs/**","styleguide/**"],
			foundationSites:["assets/scss/vendor/foundation-sites/**"]		},
	 "babel": {
		    options: {
		      sourceMap: true
		    },
		    dist: {
		      files: {
		        "Assets/js/foundation.min.js": "docs/assests/js/foundation.min.js"
		      }
		    }
		  }
	});
	// These plugins provide necessary tasks.



	// Default task.
	grunt.registerTask('BRISTOL', [
		'bower',
		'clean:foundationSites',
	    'copy:BOWER',
	    'copy:BOWEROVERRIDES'
		
	]);
	grunt.registerTask('build', [
		'clean:localFolder',
		'sass:vendor',
		'sass:dist',
		'postcss',
		'copy:INTERNAL',
		'styledown',
	    'liquid',
		'watch'
		
	]);

	grunt.registerTask('buildsass', [
		'sass:vendor',
		'sass:dist',
		'cssmin'
		
	]);
	grunt.registerTask('serve', [
		'connect'
		]);
}
