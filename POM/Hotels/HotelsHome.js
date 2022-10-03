const Commands = require("../../Utils/Commands");
const Moments = require("../../Utils/Moments");

class HotelsHome {

    commands = new Commands
    moments = new Moments

    signInButton = '//button[contains(text(), "Sign")]'
    signInLink = '//a[contains(@data-stid, "signin")]'
    signUpLink = '//a[contains(@data-stid, "link-header-account-signup")]'
    feedbackLink = "//a[text()='Feedback']"

    goingToSearchTab = "//button[@aria-label = 'Going to']" ;
    
    travelersLocator = '//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]'
    
    adultsIncrease = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]/span[1]/*[1]'
    adultsDecrease = "//*[@id='traveler_selector_adult_step_input-0-decrease-title']"
    childIncrease = '//body/div[@id="app-blossom-flex-ui"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]/span[1]/*[1]'
    childDecrease = "//*[@id='traveler_selector_children_step_input-0-decrease-title']"
    
    removeChildrenButton = "//input[contains(@aria-label,'Children')]/preceding-sibling::button";
    addChildrenButton = "//input[contains(@aria-label,'Children')]/following-sibling::button"
    addAdultsButton = "//input[@aria-label='Adults ']/following-sibling::button/span"

    child1Age = '//select[@id="age-traveler_selector_children_age_selector-0-0"]'
    child2Age = '//select[@id="age-traveler_selector_children_age_selector-0-1"]'
    child3Age = '//select[@id="age-traveler_selector_children_age_selector-0-2"]'
    child4Age = '//select[@id="age-traveler_selector_children_age_selector-0-3"]'
    child5Age = '//select[@id="age-traveler_selector_children_age_selector-0-4"]'
    child6Age = '//select[@id="age-traveler_selector_children_age_selector-0-5"]'
    
    // child1AgeSelect = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="0"]'
    // child2AgeSelect = '//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="4"]'
    // child3AgeSelect = '//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]'
    
    totalAdults = '//input[@id="traveler_selector_adult_step_input-0"]'
    totalChildren = '//input[@id="traveler_selector_children_step_input-0"]'
    numOfChildren = "//input[contains(@aria-label,'Children')]"

    travelersDoneButton = "//button[text()='Done']"

    numOfTravelers = "//button[contains(text(),'travelers')]"
    numOfDropdownsForChildren = "//select[contains(@name,'child-traveler_selector')]"

    phoneNumberError = '//*[@id="phoneNumber-error"]'
    getTheAppBtn = '//*[@id="submitBtn"]'
    phoneNumberLocator = '//*[@id="phoneNumber"]'
    
    languageOptions = '//select[@id="language-selector"]'

    englishButton ='//div[contains(text(),"English")]'
    spanishOption = '//option[contains(text(),"Español (Estados Unidos)")]'
    saveButton ='//button[contains(text(),"Save")]'
    espanolButton = '//div[contains(text(),"Español")]'
    englishOption =  '//option[contains(text(),"English (United States)")]'
    spanishSaveButton = "//button[contains(text(),'Guardar')]"
    
    calenderButton = '//button[@id="date_form_field-btn"]'
    backMonthButton = "//div[@class='uitk-calendar']//div//button"
    septemberMonth = '//h2[contains(text(),"September")]'

    property = '//div[contains(text(),"List your property")]'
    wouldYouLike = '//p[contains(text(),"What would you like to list?")]'
    lodging = '//p[contains(text(),"Lodging")]'
    privateResidence = '//p[contains(text(),"Private residence")]'
    
    step1 = '//div[contains(text(),"Step 1 of 3")]'
    step2 = '//div[contains(text(),"Step 2 of 3")]'
    step3 = '//div[contains(text(),"Step 3 of 3")]'

    earn = '//h1[contains(text(),"See how much you could earn!")]'
    
    plusBedroom = '//button[@aria-label="Increase bedrooms"]'
    plusBathroom= '//button[@aria-label="Increase bathrooms"]'

    nextButton ='//button[@id="propertyInfoNextBtn"]'

    propertyLocated = '//h1[contains(text(),"Where is your property located?")]'
    enterAddress = '//input[@id="locationTypeAhead"]'
    addressAuto = '//ul[@class="typeahead-prediction-list fds-field-select"]'

    map = '//div[@data-wdio="google-map-component"]'
    pinInMap = "//span[contains(text(),'To navigate')]/following-sibling::div"
    insideTheAuto = '//ul[@class="typeahead-prediction-list fds-field-select"]'
    pinLocationVerify = '//div[contains(text(),"Pin location may not be exact.")]'
    
    goingToLocator = "[aria-label='Going to']"
    
    selectDates = '//button[@id="date_form_field-btn"]'
    clickNextMonth = '[aria-label="Next month"]'

    clickingApplyLocator = '//button[@data-stid="apply-date-picker"]'
    clickingSearchLocator = '//button[@id="submit_button"]'
    
    tellUsHow = '//span[contains(text(),"Tell")]'
    feedBack = '//a[contains(text(),"Share feedback")]'

    star5 = '//span[contains(text(),"5★")]'
    sortBy = '//select[@id="sort"]'
    optionPrice ='//option[@value="PRICE_LOW_TO_HIGH"]'
    firstStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    secondStarRating = '//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    thirdStarRating ='//body/div[@id="app-shopping-pwa"]/div[@id="app-layer-manager"]/div[@id="app-layer-base"]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]/div[2]/section[2]/ol[1]/li[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]'
    allPrices = '//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]'
    allStar = '//div[@class="uitk-rating"]'

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    
    monthHeadingLocatorStarts = 'h2='
    
    button = "//button[text()='Search']"
    fiveStarLocator = "//label[@for='star-4']"
    scrollTorating = "//h4[text()='Star rating']"
    fiveStarLocator = "//input[@id='star-4']/following-sibling::label"
    sortDropdown = "#sort"
    starRatingLocator = "//span[contains(text(),'5.0 out of 5')]"
    numOfHotelsLocator = "//span[contains(text(),'More')]"
    priceLocator = "//div[contains(text(),'The price is')]/following-sibling::span//div"

async septemberText(){
    return await this.commands.getTextFunction(this.septemberMonth);
}
    
async goToMonthBackwards() {
        await this.commands.clickWebElement(this.backMonthButton);
    }

    
async backMonthButtonDisabled() {
    return await this.commands.isWebElementEnabled(this.backMonthButton);
}
    
async september2022FromTodayEnabled(data) {
    await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
    let newNumber = now.date() + data;
    let enabled = await $("//button[@data-day=" + newNumber + "]");
    return enabled.isEnabled();
}



async phoneNumberErrorDisplayed() {
    return await this.commands.isWebElementDisplayed(this.phoneNumberError);
}
async scrollToGetApp() {
    await this.commands.scrollAndFindWebElement(this.getTheAppBtn);
}
async clickGetApp() {
    await this.commands.clickWebElement(this.getTheAppBtn);
}
async typePhoneNumber(phoneNumber) {
    await this.commands.typeInWebElement(this.phoneNumberLocator, phoneNumber);
}


async clickEnglish () {
    await this.commands.clickWebElement(this.englishButton);
}
async selectLanguage (text) {
    await this.commands.selectFromDropdown(this.languageOptions, text);
}
async saveLanguage () {
    await this.commands.clickWebElement(this.saveButton);
}

async spanishDisplay() {
    return await this.commands.getTextFromWebElement(this.espanolButton);
}

async clickEspanol() {
    await this.commands.clickWebElement(this.espanolButton);
}

async spanishSaveLang() {
    await this.commands.clickWebElement(this.spanishSaveButton);
}
async englishDisplay() {
    return this.commands.getTextFromWebElement(this.englishButton);
}


async selectCheckOutDate(monthName, year, checkOutDate) {
    const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
    const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
    await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
}

async selectCheckInDate(monthName, year, checkInDate) {
    await this.commands.clickWebElement(this.selectDates);
    const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
    const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
    await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
}


async typingDestination(text) {
    await this.commands.clickWebElement(this.goingToLocator)
    let textInDestination = await $("#destination_form_field");
    return await textInDestination.setValue(text);
  }

async goingToField(text) {
    const autoSuggestionElements = await $$("//div[@class='truncate']");
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0
      ) {
        await autoSuggestionElement.click();
        break
      }
    }
  }

async goToMonth(month, year){
    while(await this.commands.isWebElementDisplayed('//h2[text()="'+month+' '+year+'"]') == false){
        await this.commands.clickWebElement(this.clickNextMonth)
    }
}
  
async december2022(data) {
    const allDecDateElements = await $$('//h2[text()="December 2022"]/following-sibling::table//button[not(@disabled)]');
    for (const dateElement of allDecDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(data) === 0) {
        await dateElement.click();
        break;
      }
    }
}
  
async jan2023(data) {
    const allDecDateElements = await $$('//h2[text()="January 2023"]/following-sibling::table//button[not(@disabled)]');
    for (const dateElement of allDecDateElements) {
      const date = await dateElement.getAttribute("data-day");
      if (date.localeCompare(data) === 0) {
        await dateElement.click();
        break;
      }
    }
}


async clickApply(){
    await this.commands.clickWebElement(this.clickingApplyLocator)
}
  
async clickDates() {
    await this.commands.clickWebElement(this.selectDates)
}

async clickSearch() {
    await this.commands.clickWebElement(this.clickingSearchLocator)
}

async tellUsHowDisplayed() {
    await this.commands.scrollAndFindWebElement(this.tellUsHow)
    return await this.commands.isWebElementDisplayed(this.tellUsHow)
}
  
async feedbackDisplayed() {
    if (await this.commands.isWebElementEnabled(this.feedBack) === true)
    {
    return await this.commands.isWebElementDisplayed(this.feedBack)}
}




async clickProperty() {
    await this.commands.clickWebElement(this.property)
}

async wouldYouLikeDisplayed() {
    return await this.commands.isWebElementDisplayed(this.wouldYouLike)
}

async isPrivateDisplayed() {
    return await this.commands.isWebElementDisplayed(this.privateResidence)
}

async isLodgingDisplayed() {
    return await this.commands.isWebElementDisplayed(this.lodging)
}

async clickPrivate() {
    await this.commands.clickWebElement(this.privateResidence)
}

async isStep1Displayed() {
    return await this.commands.isWebElementDisplayed(this.step1)
}

async isStep2Displayed() {
    return await this.commands.isWebElementDisplayed(this.step2)
}

async isStep3Displayed() {
    return await this.commands.isWebElementDisplayed(this.step3)
}

async isEarnDisplayed() {
    return await this.commands.isWebElementDisplayed(this.earn)
}

async clickBedroom() {
    await this.commands.clickWebElement(this.plusBedroom)
}

async clickBathroom() {
    await this.commands.clickWebElement(this.plusBathroom)
}

async clickNext() {
    await this.commands.clickWebElement(this.nextButton)
}

async isPropertyDisplayed() {
    await this.commands.clickWebElement(this.propertyLocated)
    return await this.commands.isWebElementDisplayed(this.propertyLocated)
}

async enterAddressText(address) {
    await this.commands.clickWebElement(this.enterAddress)
    await this.commands.typeInWebElement(this.enterAddress, address)
}

async intoGoingToAddress(text) {
    const autoSuggestionElements = await $$('//li[@class="typeahead-prediction-item fds-list-item"]');
    for (const autoSuggestionElement of autoSuggestionElements) {
      const suggestionText = await autoSuggestionElement.getText();
      if (
        suggestionText.toLowerCase().localeCompare(text.toLowerCase()) === 0) {
        await autoSuggestionElement.click();
        break
        }
    }
}

async isMapDisplayed() {
    return await this.commands.isWebElementDisplayed(this.map)
}

async sixthAvenue() {
    return await this.commands.isWebElementDisplayed(this.insideTheAuto, '1211 6th Avenue, New York, NY, USA')
    
}

async isPinInMapDisplayed() {
    return await this.commands.isWebElementDisplayed(this.pinInMap)
}

async pinUnderVerification() {
    return await this.commands.isWebElementDisplayed(this.pinLocationVerify)
}

async verifyPriceLessToMore(){
    // await this.commands.isWebElementDisplayedWithWait(this.numOfHotelsLocator);
    const priceLocatorArr = await this.commands.findWebElements(this.priceLocator);
    const prices = [];
    // const hotelNum = await this.commands.findWebElements(this.numOfHotelsLocator).length;
    for(let i = 0; i<=priceLocatorArr.length; i++){
        const priceText = await this.commands.getTextFromWebElement(this.priceLocator);
        const num = priceText.split('$');
        prices.push(num[1]);
            if(i===priceLocatorArr.length){
                for(let i = 0; prices[i]<=prices[i+1]; i++){
                    return true;
                }
            }
    }
}
async verifyAllHotelsAreSameRating(){
    const hotelNum = await this.commands.findWebElements(this.numOfHotelsLocator).length;
    const starRatingNum = await this.commands.findWebElements(this.starRatingLocator).length;
    if(hotelNum===starRatingNum){
        return true;
    }
}
async clickFiveStarRating(){
    await this.commands.isWebElementDisplayedWithWait(this.button);
    await this.commands.scrollAndClickWebElement(this.fiveStarLocator);
    // await this.commands.clickWebElement(this.fiveStarLocator);
        // await browser.pause(2000);
}

async selectFromSortByDropdown(value){
    await this.commands.scrollAndFindWebElement(this.sortDropdown);
    await this.commands.selectFromDropdown(this.sortDropdown, value);
}




async switchToTab() {
    const allHandles = await browser.getWindowHandles();
    let titleContains = 'DirectWord';
    let handle = ''
    for (handle of allHandles) {
        await browser.switchToWindow(handle);
        const pageTitle = await browser.getTitle();
        if (!pageTitle.includes(titleContains)) {
            await browser.closeWindow();
        }
    }
}


async switchToListTab() {
    const allHandles = await browser.getWindowHandles();
    let titleContains = 'Property Info';
    let handle = ''
    for (handle of allHandles) {
        await browser.switchToWindow(handle);
        const pageTitle = await browser.getTitle();
        if (!pageTitle.includes(titleContains)) {
            await browser.closeWindow();
        }
    }
}

async clickSignInButton() {
    await this.commands.clickWebElement(this.signInButton);
}

async clickSignInLink() {
    await this.commands.clickWebElement(this.signInLink);
}

async clickSignUpLink() {
    await this.commands.clickWebElement(this.signUpLink);
}

async clickFeedbackLink() {
    await this.commands.clickWebElement(this.feedbackLink);
}

async clickTraveler() {
    await this.commands.clickWebElement(this.travelersLocator);
}

async clickAdultsIncrease() {
    await this.commands.clickWebElement(this.adultsIncrease);
}

async clickAdultsDecrease() {
    await this.commands.clickWebElement(this.adultsDecrease);
}

async setNumOfAdults(num){ 
    for(let i=2; i<num ; i++){
        await this.commands.clickWebElement(this.addAdultsButton);
        const numOfAdults = await this.commands.getTextFromWebElement(this.numOfAdults);
        if(numOfAdults.localeCompare(num)===0){
            break;
        }
    }
}
async setNumOfChildren(num){
    for(let i=0; i<num ; i++){
        await this.commands.clickWebElement(this.addChildrenButton);
        const numOfChildren = await this.commands.getTextFromWebElement(this.numOfChildren);
        if(numOfChildren.localeCompare(num)===0){
            break;
        }
    }
}

async clickChildMinusButton(num){
    for(let i=0; i<num;i++){
        await this.commands.clickWebElement(this.removeChildrenButton);
    }
}

async clickChildIncrease() {
    await this.commands.clickWebElement(this.childIncrease);
}

async clickChildDecrease() {
    await this.commands.clickWebElement(this.childDecrease);
}


async selectChild1Age(num){
    await this.commands.selectFromDropdown(this.child1Age, num);
}

async selectChild2Age(num) {
    await this.commands.selectFromDropdown(this.child2Age, num);
}

async selectChild3Age(num) {
    await this.commands.selectFromDropdown(this.child3Age, num);
}

async clickDoneButton() {
    await this.commands.clickWebElement(this.travelersDoneButton);
}

async travelersText () {
    let text = await command.getTextFunction(this.travelers)
    console.log('RIGHT HERE' + text);
    let index = text.search(/[0-9]/);
    let firstNum = Number(text[index]);
    return firstNum;
}

async travelersNumEqualInput(num){
    const text = await this.commands.getTextFromWebElement(this.numOfTravelers);
    if (text.includes(num)){
        return true;
    }
}

async childrenAgeDropdownisDisplayed(){
    return await this.commands.isWebElementDisplayed(this.numOfDropdownsForChildren);
}
async verify2Dropdown(){
    const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
    if(locators.length===2){
        return true;    
    }
}
async verify6Dropdown(){
    const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
    if(locators.length===6){
        return true;    
    }
}
async verify5Dropdown(){
    const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
    if(locators.length===5){
        return true;    
    }
}
async verify0Dropdown(){
    const locators = await this.commands.findWebElements(this.numOfDropdownsForChildren);
    if(locators.length===0){
        return true;    
    }
}

async addChildrenisEnabled() {
    return await this.commands.isWebElementEnabled(this.childIncrease);
}
async removeChildrenisEnabled() {
    return await this.commands.isWebElementEnabled(this.childDecrease);


}

}

module.exports = HotelsHome