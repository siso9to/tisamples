exports.AppTabGroup = function() {
	var self = Ti.UI.createTabGroup();

	var homeWin = require('ui/AppWindow').AppWindow(L('home'));
	var settingWin = require('ui/AppWindow').AppWindow(L('settings'));

	var firstView = require("ui/FirstView").FirstView();
	homeWin.add(firstView);
	
	var homeTab = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: homeWin
	});
	
	homeWin.containingTab = homeTab;
	
	var settingTab = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: settingWin
	});
	settingWin.containingTab = settingTab;
	
	self.addTab(homeTab);
	self.addTab(settingTab);
	
	return self;
};
