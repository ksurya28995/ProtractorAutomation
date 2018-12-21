/*
 * This jsFile is used to run the number of test cases (i.e, number of 'it' functions) on run.
 * 
 * @author: Surya.K
 */
describe('Enter AngularJS page\n', function() {

	/*
	 * This method is used to run @first ->before the start of the 'it'
	 * 
	 * @author: Surya.K
	 */
	beforeEach(function() {
		browser.get('https://angularjs.org');
	});

	/*
	 * This method is used to run the test scenario
	 * 
	 * @author: Surya.K
	 */
	it('1: should check the download button presence', function() {
		var downloadBtn = element(by
				.xpath("//a[contains(text(),'Download AngularJS')]"));
		expect(downloadBtn.isDisplayed());
		expect(downloadBtn.getText().then(function(text) {
			text = text.toLowerCase();
			console.log(text);
			return text;
		})).toEqual("download angularjs")
	});

	/*
	 * This method is used to run @last ->after the 'it'
	 * 
	 * @author: Surya.K
	 */
	afterEach(function() {
		browser.manage().logs().get('browser').then(function(browserLog) {
			if (browserLog.length > 0)
				console.log('log: TEST CASE DONE');
		});
	});
});