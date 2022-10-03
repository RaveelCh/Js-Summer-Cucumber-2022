const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelsHome = require("../../POM/Hotels/HotelsHome");

const hotelsHome = new HotelsHome

// TC30

// Given(/^I am on Hotels landing page$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(3000);   
// })

When(/^I scroll on Get The App$/, async function() {
    await hotelsHome.scrollToGetApp();
    await browser.pause(3000);       
})

When(/^I enter invalid phone number$/, async function() {
    await hotelsHome.typePhoneNumber('000000');
    await browser.pause(3000);       
})

When(/^I click on Get The App$/, async function() {
    await hotelsHome.clickGetApp();
    await browser.pause(3000);       
})

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function() {
    expect(await hotelsHome.phoneNumberErrorDisplayed(), 'Valid Number error not displayed').to.be.true;
})





// TC31

When(/^I click on English language$/, async function() {
    await hotelsHome.clickEnglish();
    await browser.pause(3000);       
})

When(/^I select Español in Language dropdown$/, async function() {
    await hotelsHome.selectLanguage('Español (Estados Unidos)');
    await browser.pause(3000);  
})

When(/^I click on Save button$/, async function() {
    await hotelsHome.saveLanguage();
    await browser.pause(3000);       
})

Then(/^I verify Español is displayed$/, async function() {
    expect(await hotelsHome.spanishDisplay(), 'Spanish not displayed').to.include('Español');
})

When(/^I select English in Language dropdown$/, async function() {
    await hotelsHome.clickEspanol();
    await browser.pause(3000); 
    await hotelsHome.selectLanguage('English (United States)');
    await browser.pause(3000); 
})

When(/^I click on Guardar button$/, async function() {
    await hotelsHome.spanishSaveLang();
    await browser.pause(3000);       
})

Then(/^I verify English is displayed$/, async function() {
    expect(await hotelsHome.englishDisplay(), 'English not displayed').to.include('English');
})




// TC19

When(/^I enter “bora” in destination$/, async function() {
    await hotelsHome.typingDestination('bora');
    await browser.pause(3000);       
})

When(/^I select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion$/, async function() {
    await hotelsHome.goingToField('bora bora');
    await browser.pause(3000);       
})

When(/^I select Dec 1, 2022 as Check-in$/, async function() {
    await hotelsHome.clickDates();
    await browser.pause(3000);
    await hotelsHome.goToMonth('December', '2022'),
    await browser.pause(3000);       
    await hotelsHome.december2022(1);
    await browser.pause(3000);       
})

When(/^I select Dec 10, 2022 as Check-out$/, async function() {
    await hotelsHome.december2022(10);
    await browser.pause(3000);       
})

When(/^I click Apply$/, async function() {
    await hotelsHome.clickApply();
    await browser.pause(3000);       
})

When(/^I click on Search button$/, async function() {
    await hotelsHome.clickSearch();
    await browser.pause(3000);       
})

Then(/^I verify Text: Tell us how we can improve our site is displayed$/, async function () {
    expect(await hotelsHome.tellUsHowDisplayed(), 'Tell us how not displayed').to.be.true
})

Then(/^I verify Button Share feedback is displayed and enabled$/, async function () {
    expect(await hotelsHome.feedbackDisplayed(), 'Feedback not displayed').to.be.true
})





// TC17

When(/^I click on Dates$/, async function() {
    await hotelsHome.clickDates();
    await browser.pause(3000);       
})

When(/^I go to current month$/, async function() {
    await hotelsHome.goToMonthBackwards();
    await browser.pause(3000);       
})

Then(/^I verify Past dates -if any- are disabled$/, async function () {
    expect(await hotelsHome.september2022FromTodayEnabled(-2), 'Past dates are enabled').to.be.false;
})

Then(/^I verify Back button on current month is disabled$/, async function () {
    expect(await hotelsHome.backMonthButtonDisabled(), 'Back button is enabled').to.be.false;
})





// TC29

When(/^I click on List your property$/, async function() {
    await hotelsHome.clickProperty();
    await browser.pause(3000);       
})

Then(/^I verify What would you like to list is displayed$/, async function () {
    await hotelsHome.switchToListTab()
    expect(await hotelsHome.wouldYouLikeDisplayed(), 'Not displayed').to.be.true;
})

Then(/^I verify Lodging and Private residence options are displayed$/, async function () {
    expect(await hotelsHome.isPrivateDisplayed() && await hotelsHome.isLodgingDisplayed(), 'Not displayed').to.be.true;
})

When(/^I click on Private residence$/, async function() {
    await hotelsHome.clickPrivate();
    await browser.pause(3000);       
})

Then(/^I verify Step 1 of 3 is displayed$/, async function () {
    expect(await hotelsHome.isStep1Displayed(), 'Not displayed').to.be.true;
})

Then(/^I verify See how much you could earn! is displayed$/, async function () {
    expect(await hotelsHome.isEarnDisplayed(), 'Not displayed').to.be.true;
})

When(/^I enter 4 bedroom$/, async function() {
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await hotelsHome.clickBedroom();
    await browser.pause(3000);       
})

When(/^I enter 2.5 bathroom$/, async function() {
    await hotelsHome.clickBathroom();
    await hotelsHome.clickBathroom();
    await hotelsHome.clickBathroom();
    await browser.pause(3000);       
})

When(/^I click on Next button$/, async function() {
    await hotelsHome.clickNext();
    await browser.pause(3000);       
})
Then(/^I verify Step 2 of 3 is displayed$/, async function () {
    expect(await hotelsHome.isStep2Displayed(), 'Not displayed').to.be.true;
})

Then(/^I verify Where is your property located is displayed$/, async function () {
    expect(await hotelsHome.isPropertyDisplayed(), 'Not displayed').to.be.true;
})

When(/^I enter 121 in address$/, async function() {
    await hotelsHome.enterAddressText('1211 6th Ave');
    await browser.pause(3000);       
})

When(/^I select 1211 6th Avenue, New York, NY, USA from auto-suggestion$/, async function() {
    await hotelsHome.intoGoingToAddress('1211 6th Avenue, New York, NY, USA');
    await browser.pause(9000);       
})

Then(/^I verify graph is displayed$/, async function () {
    expect(await hotelsHome.isMapDisplayed(), 'Graph not displayed').to.be.true;
})

Then(/^I verify pin in graph is displayed$/, async function () {
    expect(await hotelsHome.isPinInMapDisplayed(), 'Pin not displayed').to.be.true;
})

Then(/^I verify Pin location may not be exact is displayed below graph$/, async function () {
    expect(await hotelsHome.pinUnderVerification(), 'Not displayed').to.be.true;
})



// TC23

When(/^I enter Manhattan, NY in destination$/, async function(){
    await hotelsHome.typingDestination('Manhattan');
    await browser.pause(3000);       
    await hotelsHome.goingToField('Manhattan');
})

When(/^I select Jan 10, 2023 as Check-in$/, async function(){
    await hotelsHome.clickDates();
    await browser.pause(3000);       
    await hotelsHome.goToMonth('January', '2023'),
    await browser.pause(3000);       
    await hotelsHome.jan2023(10);
    await browser.pause(3000);  
})

When(/^I select Jan 23, 2023 as Check-out$/, async function(){
    await hotelsHome.jan2023(23);
})

When(/^I click on 5 star from star-rating$/, async function(){
    await hotelsHome.clickFiveStarRating();
})

When(/^I select Price from sort-by dropdown$/, async function(){
    await hotelsHome.selectFromSortByDropdown('Price');
})

Then(/^I verify all hotels in search results are star-rated as selected in above step$/, async function(){
    expect(await hotelsHome.verifyAllHotelsAreSameRating(), 'All hotels are not same rating').to.be.true;
})

Then(/^I verify all hotels are listed in increasing order price$/, async function(){
    expect(await hotelsHome.verifyPriceLessToMore(), 'Price is not in order').to.be.true;
})