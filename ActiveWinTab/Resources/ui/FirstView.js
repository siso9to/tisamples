exports.FirstView = function() {
	var self = Ti.UI.createView();
	
	var openWinButton = Titanium.UI.createButton({
        title : 'Open',
        top: 100,
        height : 50,
        width : 100,
    });
    
	openWinButton.addEventListener('click', function(e){
		var view = require('ui/SecondView').SecondView();
		var win = require('ui/AppWindow').AppWindow(L('Open'));
		win.add(view);
		win.open();
	});

	self.add(openWinButton);

	var openWinInTabButton = Titanium.UI.createButton({
        title : 'Open in Tab',
        top: 200,
        height : 50,
        width : 100,
    });
    
	openWinInTabButton.addEventListener('click', function(e){
		var view = require('ui/SecondView').SecondView();
		var win = require('ui/AppWindow').AppWindow(L('InTab'));
		win.add(view);
		ActiveWinTab.tabs.activeTab.open(win);
	});
	
	self.add(openWinInTabButton);
	
	return self;
};
