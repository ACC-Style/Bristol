// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var viewModel = {
};
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.Href.hash = '#!/';
pager.extendWithPage(viewModel);
// apply your bindings
ko.applyBindings(viewModel);
// run this method - listening to hashchange
pager.start();