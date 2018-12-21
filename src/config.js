exports.config = {

	// framewoek used
	framework : 'jasmine',

	// selenium server hosted address
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// desired capability
	capabilities : {
		'directConnect' : true,
		'browserName' : 'chrome',
		'loggingPrefs' : {
			'driver' : 'WARNING',
			'server' : 'WARNING',
			'browser' : 'INFO'
		}
	},

	// time interval for every async function
	allScriptsTimeout : 999999,

	// time interval for every 'it' function
	jasmineNodeOpts : {
		defaultTimeoutInterval : 999999
	},

	// webdriver browser settings
	onPrepare : function() {
		browser.manage().window().maximize();
		browser.driver.manage().timeouts().implicitlyWait(30000);
	},

	// supporting specs
	specs : [ './test/*.js' ]
}