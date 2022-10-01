const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelsHome = require("../../POM/TestPOM/HotelsHome");

const hotelshome = new HotelsHome

Given(/^I am on hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/');
})

When(/^I click on Learn about Hotels.com Rewards$/, async function() {
    expect (await hotelshome.clickRewards)
});

// Then(/^I verify Hotels Rewards opened in a new window$/, async function() {
//     expect (await )
// });

When(/^Click on Join Now$/, async function() {
    expect (await hotelshome.clickJoinNow)
});

// Then(/^I verify Form is blank$/, async function() {
//     expect (await )
// });

// Then(/^I verify Continue button is NOT enabled$/, async function() {
//     expect (await )
// });
