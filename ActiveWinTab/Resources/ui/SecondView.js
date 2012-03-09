exports.SecondView = function() {
	var self = Ti.UI.createView();

	var closeButton = Titanium.UI.createButton({
        title : 'Close',
        height : 50,
        width : 100,
    });
	
	closeButton.addEventListener('click', function(e){
		//Ti.UI.currentWindow.close();
		ActiveWinTab.activeWindow.close();
	});
	
	self.add(closeButton);
	
	return self;
};
