const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelsFeedback = require("../../POM/Hotels/HotelsFeedback");
const HotelsHome = require("../../POM/Hotels/HotelsHome");
const HotelsSignIn = require("../../POM/Hotels/HotelsSignIn");
const HotelsSignUp = require("../../POM/Hotels/HotelsSignUp");

const hotelsHome = new HotelsHome
const hotelsSignin = new HotelsSignIn
const hotelsSignUp = new HotelsSignUp
const hotelsFeedback = new HotelsFeedback



// TC18

Given(/^I am on Hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(3000);   
})

When(/^I click on Travelers$/, async function() {
    await hotelsHome.clickTraveler();
    await browser.pause(3000);       
})

When(/^I enter 6 Adults$/, async function() {
    await hotelsHome.clickAdultsIncrease();
    await hotelsHome.clickAdultsIncrease();
    await hotelsHome.clickAdultsIncrease();
    await hotelsHome.clickAdultsIncrease();
    await browser.pause(3000);       
})

When(/^I enter 3 Children$/, async function() {
    await hotelsHome.clickChildIncrease();
    await hotelsHome.clickChildIncrease();
    await hotelsHome.clickChildIncrease();
    await browser.pause(3000);       
})

When(/^I select first child age: 4$/, async function() {
    await hotelsHome.selectChild1Age(4);
    await browser.pause(3000);       
})

When(/^I select second child age: Under 1$/, async function() {
    await hotelsHome.selectChild2Age('Under 1');
    await browser.pause(3000);       
})

When(/^I select third child age: 7$/, async function() {
    await hotelsHome.selectChild3Age(7);
    await browser.pause(3000);       
})

When(/^I click Done$/, async function() {
    await hotelsHome.clickDoneButton();
    await browser.pause(3000);       
})

Then(/^I verify total number of guests in sum of adults and children as same as selected on step #4 and #5$/, async function() {
    expect(await hotelsHome.travelersNumEqualInput(9), 'Traveler number is different').to.be.true;
})






// TC20

When(/^I click on Sign in button$/, async function() {
    await hotelsHome.clickSignInButton();
    await browser.pause(3000);       
})

When(/^I click Sign up link$/, async function() {
    await hotelsHome.clickSignUpLink();
    await browser.pause(3000);   
})

When(/^I click “Terms and Conditions” link$/, async function() {
    await hotelsSignUp.clickTermsAndCLink();
    await browser.pause(9000);  
})

Then(/^I verify “Terms and Conditions” page opens in new tab$/, async function() {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(2)
})

When(/^I click “Privacy Statement” link$/, async function() {
    await hotelsSignUp.clickPrivacyLink();
    await browser.pause(9000);   
})

Then(/^I verify “Privacy Statement” page opens in new tab$/, async function() {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(3)    
})





// TC21

When(/^I click on Sign in link$/, async function() {
    await hotelsHome.clickSignInButton();
    await browser.pause(3000);
    await hotelsHome.clickSignInLink();
    await browser.pause(3000);
})

When(/^I enter invalid email$/, async function() {
    await hotelsSignin.typeEmail('abc@abc.com');
    await browser.pause(3000);
})

When(/^I enter invalid password$/, async function() {
    await hotelsSignin.typePwd('abc');
    await browser.pause(3000);
})

When(/^I click Sign in button$/, async function() {
    await hotelsSignin.clickLogInForm();
    await browser.pause(10000);
})

Then(/^I verify error is displayed$/, async function() {
    expect(await hotelsSignin.signInErrorDisplayed(), 'Login error is NOT displayed').to.be.true;
})





// TC 22

When(/^I enter invalid email address$/, async function() {
    await hotelsSignUp.typeEmail('#!@###');
    await browser.pause(3000);       
})

Then(/^I verify email error is displayed$/, async function() {
    expect(await hotelsSignUp.emailErrorDisplayed(), 'Email error is NOT displayed').to.be.true;
    await browser.pause(3000);       
})

When(/^I enter invalid first name$/, async function() {
    await hotelsSignUp.typeFirstName('!@');
    await browser.pause(3000);       
})

Then(/^I verify first name error is displayed$/, async function() {
    expect(await hotelsSignUp.firstNameErrorDisplayed(), 'First name error is NOT displayed').to.be.true;
    await browser.pause(3000);       
})

When(/^I enter invalid last name$/, async function() {
    await hotelsSignUp.typeLastName('%^&');
    await browser.pause(3000);       
})

Then(/^I verify last name error is displayed$/, async function() {
    expect(await hotelsSignUp.lastNameErrorDisplayed(), 'Last name error is NOT displayed').to.be.true;
    await browser.pause(3000);       
})

When(/^I enter password$/, async function() {
    await hotelsSignUp.typePwd('abc@abc.com');
    await browser.pause(3000);       
})

Then(/^I verify “Keep me signed in” checkbox is displayed and enabled$/, async function() {
    expect(await hotelsSignUp.keepSignedInDisplayed(),'Keep me is NOT displayed').to.be.false;
    expect(await hotelsSignUp.keepSignedInEnabled(),'Keep me is NOT enabled').to.be.true;
    await browser.pause(3000);       
})

Then(/^I verify “Continue” button is displayed but NOT enabled$/, async function() {
    expect(await hotelsSignUp.continueButDisplayed(),'Continue is NOT displayed').to.be.true;
    expect(await hotelsSignUp.continueButEnabled(),'Continue is enables').to.be.false;
    await browser.pause(3000);       
})





// TC24

When(/^I click Feedback$/, async function() {
    await hotelsHome.clickFeedbackLink();
    await hotelsHome.switchToTab();
})

When(/^I click on Submit button$/, async function() {
    await hotelsFeedback.clickSubmit();
    await browser.pause(6000);          
})

Then(/^I verify error message is displayed$/, async function() {
    expect(await hotelsFeedback.feedbackErrorDisplayed() , 'Login error is NOT displayed').to.be.true;
})

Then(/^I verify star boxes section is in a red dotted box$/, async function() {
    expect(await hotelsFeedback.errorBorderDisplayed() , 'Error border is NOT displayed').to.be.true;
})




// TC25

When(/^I select any star-rating$/, async function() {
    await hotelsFeedback.click5Star(); 
    await browser.pause(3000);         
})

When(/^I enter any comments$/, async function() {
    await hotelsFeedback.clickComment();
    await hotelsFeedback.typeComment('Testing');  
    await browser.pause(3000);        
})

When(/^I select any option for How likely are you to return to Hotels.com$/, async function() {
    await hotelsFeedback.likelyToReturn('Unsure');
    await browser.pause(3000);       
})

When(/^I select any answer for Prior to this visit, have you ever booked on Hotels.com$/, async function() {
    await hotelsFeedback.bookedHereBeforeYesOrNo('yes'); 
    await browser.pause(3000);        
})

When(/^I select any answer for Did you accomplish what you wanted to do on this page$/, async function() {
    await hotelsFeedback.didYouAccomplishYesOrNo('no');  
    await browser.pause(3000);        
})

Then(/^I verify THANK YOU FOR YOUR FEEDBACK. is displayed$/, async function() {
    expect(await hotelsFeedback.thankYouFeedbackDisplayed() , 'Thank You for Your Feedback is NOT displayed').to.be.true;
})



// TC28

When(/^I select “Children” as (2|6|5|0)$/, async function(fieldname){
    switch(fieldname) {
        case '2':
            await hotelsHome.setNumOfChildren(2);
            await browser.pause(2000);
            break;
        case '6':
            await hotelsHome.setNumOfChildren(4);
            await browser.pause(2000);
            break;
        case '5':
            await hotelsHome.clickChildMinusButton(1);
            await browser.pause(2000);
            break;
        case '0':
            await hotelsHome.clickChildMinusButton(5);
            await browser.pause(2000);
            break;
        
    }   
})

Then(/^I verify Children-age dropdown are (2|6|5)$/, async function(fieldname){
    switch(fieldname) {
        case '2':
            expect(await hotelsHome.verify2Dropdown(), 'Does not display 2 dropdown').to.be.true;
            break;
        case '6':
            expect(await hotelsHome.verify6Dropdown(), 'Does not display 6 dropdown').to.be.true;
            break;
        case '5':
            expect(await hotelsHome.verify5Dropdown(), 'Does not display 5 dropdown').to.be.true;
            break;
    }
})

Then(/^I verify plus button is enabled$/, async function() {
    expect(await hotelsHome.addChildrenisEnabled(), 'Add button not enabled').to.be.true;
})

Then(/^I verify minus button is enabled$/, async function() {
    expect(await hotelsHome.removeChildrenisEnabled(), 'Remove button not enabled').to.be.true;
})

Then(/^I verify plus button is disabled$/, async function() {
    expect(await hotelsHome.addChildrenisEnabled(), 'Add button enabled').to.be.true;
})

Then(/^I verify Children-age dropdown is NOT displayed$/, async function() {
    expect(await hotelsHome.childrenAgeDropdownisDisplayed(), 'Children Age dropdown is displayed').to.be.false;
})

Then(/^I verify minus button is disabled$/, async function() {
    expect(await hotelsHome.removeChildrenisEnabled(), 'Remove button enabled').to.be.true;
})