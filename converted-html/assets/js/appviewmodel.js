function formObject(data){
	var self = this;
	
}


function viewModel(){
	var self = this;
	
	self.Form = ko.observable(new formObject());


// Cockcroft-Gault CrCl = (140-age) * (Wt in kg) * (0.85 if female) / (72 * Cr)

	
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
var path = "#!/content/framework/";
pager.navigate(path);

