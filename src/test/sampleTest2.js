let util = require('./commonUtility');

describe('Enter GURU99 Name', function() {
	it('should add a Name as GURU99', function() {
		util.openURL('https://google.com');
		element(by.model('yourName')).sendKeys('GURU99');
		var guru = element(by
				.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
		expect(guru.getText()).toEqual('Hello GURU99!');
	});
});