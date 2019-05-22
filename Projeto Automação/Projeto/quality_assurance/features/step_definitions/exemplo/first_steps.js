const { Given, When, Then } = require('cucumber')
//const expect = require('chai').use(require('chai-as-promised')).expect
const chai = require('chai');
chai.use(require('chai-url'));
chai.use(require('chai-smoothie'));
//const protractor = require('protractor')
//const assert = require('assert')
//const EC = protractor.ExpectedConditions;

var first = require('../../page_objects/exemplo/first_po')
var first = new first()

Given('que acesso a url {string}', async function (url) {

    await browser.get(url)
});