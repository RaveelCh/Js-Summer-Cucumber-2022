const Commands = require("../../Utils/Commands");

class HotelsHome {

    commands = new Commands

    signInButton = '//button[contains(text(), "Sign")]'
    signInLink = '//a[contains(@data-stid, "signin")]'
    signUpLink = '//a[contains(@data-stid, "link-header-account-signup")]'
    feedbackLink = "//a[text()='Feedback']"

    goingToSearchTab = "//button[@aria-label = 'Going to']" ;
    
    travelersLocator = '//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]'
    
    adultsIncrease = "//input[@aria-label='Adults ']/following-sibling::button/span"
    adultsDecrease = "//*[@id='traveler_selector_adult_step_input-0-decrease-title']"
    childIncrease = "//input[contains(@aria-label,'Children')]/following-sibling::button"
    childDecrease = "//input[contains(@aria-label,'Children')]"
    
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