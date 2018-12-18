exports.config={
		framework:'jasmine',
		seleniumAddress:'http://localhost:4444/wd/hub',
		capabilities:{
			browserName: 'chrome'
		},
		onPrepare: function(){
			browser.driver.manage().timeouts().implicitlyWait(30000);
		},
		specs:['./test/sampleTest.js']
}