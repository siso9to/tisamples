exports.AppWindow = function(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	self.addEventListener('focus', function(e){
        ActiveWinTab.activeWindow = self;
    });
		
	return self;
};


