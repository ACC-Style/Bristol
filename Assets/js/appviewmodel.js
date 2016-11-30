function formObject(data){
	var self = this;
	
}


function viewModel(){
	var self = this;
	
	self.Form = ko.observable(new formObject());
	self.cssSwitch = ko.observable();
	self.switchStyles = function () {
	var cssFileTrue = "assets/css/index.css"; 
	var cssFileFalse = "assets/css/index-2.css"; 
	var cssLinkIndex = 6;
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	if(!self.cssSwitch()){
		newlink.setAttribute("href", cssFileTrue);
		console.log("true");
	}else{
		newlink.setAttribute("href", cssFileFalse);
		console.log("false");
	}
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}


	
}
var appmodel = new viewModel();
// ko.applyBindings(appmodel);
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
// var viewModel = {
// };
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
// var path = "#!/";
// pager.navigate(path);
appmodel.cssSwitch.subscribe( appmodel.switchStyles );
	
