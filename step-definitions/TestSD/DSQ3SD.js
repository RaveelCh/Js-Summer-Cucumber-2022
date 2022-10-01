const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const DSHomepage = require("../../POM/TestPOM/DSHome");

const dsHome = new DSHomepage

Given(/^I am on darksky landing page$/, async function() {
    await browser.url('https://www.darksky.net/')
})

When(/^I scroll to Today's timeline$/, async function() {
    expect(await browser.scroll)
})