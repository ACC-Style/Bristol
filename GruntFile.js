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
				options: {                       // Target options
			        style: 'expanded'
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
		        	'assets/js/selectonic.js',
		        	'assets/js/chosen/chosen.jquery.js',
		        	'assets/js/jquery-ui.js',
		        	'assets/js/knockout.js',
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
					src:'**',
					dest:'converted-html/assets/css'
				},{
					expand:true,
					cwd:'assets/css',
					src:'**',
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
			INTERNAL:{
				files:[
				{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'converted-html/assets/js'
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:'**',
					dest:'converted-html/assets/css'
				},{
					expand:true,
					cwd:'assets/img',
					src:'**',
					dest:'converted-html/assets/img'
				},{
					expand:true,
					cwd:'assets/fonts',
					src:'**',
					dest:'converted-html/assets/fonts'
				},{
					expand:true,
					cwd:'assets/js',
					src:'**',
					dest:'styleguide/assets/js'
				}
				,{
					expand:true,
					cwd:'assets/css',
					src:'**',
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
			tasks: [ 'sass:dist','cssmin','copy:STYLES']
			},
			index:{
			files: [ 'assets/scss/index.scss'],
			tasks: [ 'sass:vendor','sass:dist','cssmin','styledown:base','copy:INTERNAL']	
			}
	    },
		clean: {
			localFolder:["converted-html/**","styleguide/**"],
			sassCasheFolder:[".sass-cache/**"],
			foundationSites:["assets/scss/vendor/foundation-sites/**"],
			foundationsFile:["assets/scss/vendor/foundation-sites/foundation.scss"],
		},
	});
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-liquid');
	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Default task.
	grunt.registerTask('build', [
		'clean:localFolder',
		'clean:foundationSites',
	    'copy:BOWER',
		// 'clean:foundationsFile',
		'clean:sassCasheFolder',
		'copy:FOUNDATIONSETTINGS',
		'sass:vendor',
		'sass:dist',
		// 'cssmin',
		'copy:INTERNAL',
		'styledown',
	    'liquid',
		'watch',
		'connect',
		
	]);
	grunt.registerTask('serve', [
		'connect'
		]);
}
