// your view model
var viewModel = {

};
// extend viewModel with a $__page__ that points to pager.page that points to a new Page
pager.extendWithPage(viewModel);
// apply your bindings
ko.applyBindings(viewModel);
pager.Href.hash = '#!/';
// run this method - listening to hashchange
pager.start();

function listChange(data, event){
    var hash = location.hash;
    console.log('hi');
    $('.split-sidebar .nav-list li').each(function(index,value){
 		var link = $(this).find('a').attr( 'href' );
    	if(link===hash){
    		$(this).addClass('selected');
    	}else{
    		$(this).removeClass('selected');
    	}
       }
    );
  };
