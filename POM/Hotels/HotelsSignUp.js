const Commands = require("../../Utils/Commands");

class HotelsSignUp {

    commands = new Commands

    emailLocator = "//*[@id='signupFormEmailInput']"
    firstNameLoc = "//*[@id='signupFormFirstNameInput']"
    lastNameLoc = "//*[@id='signupFormLastNameInput']"
    pwdLocator = "//*[@id='signupFormPasswordInput']"
    keepSignedIn = "//*[@id='signUpFormRememberMeCheck']"
    keepMeText = '//label[contains(text(),"Keep me signed in")]'

    continueButLoc = "//*[@id='signupFormSubmitButton']"

    termsAndConditionsLoc = "//a[text()='Terms and Conditions']"
    privacyLoc = "//a[text()='Privacy Statement']"

    emailError = '//*[@id="signupFormEmailInput-error"]'
    firstNameError = "//*[@id='signupFormFirstNameInput-error']"
    lastNameError = "//*[@id='signupFormLastNameInput-error']"


    async typeEmail(userEmail) {
        await this.commands.typeInWebElement(this.emailLocator, userEmail)
    }


    async typeFirstName(firstName) {
        await this.commands.typeInWebElement(this.firstNameLoc, firstName)
    }


    async typeLastName(lastName) {
        await this.commands.typeInWebElement(this.lastNameLoc, lastName)
    }


    async typePwd(userPwd) {
        await this.commands.typeInWebElement(this.pwdLocator, userPwd)
    }


    async keepSignedInDisplayed() {
        return await this.commands.isWebElementDisplayed(this.keepSignedIn)
    }
    async keepSignedInEnabled() {
        return await this.commands.isWebElementEnabled(this.keepMeText)
    }
    async clickKeepSignedIn() {
        await this.commands.clickWebElement(this.keepSignedIn)
    }



    async continueButDisplayed() {
        return await this.commands.isWebElementDisplayed(this.continueButLoc)
    }
    async continueButEnabled() {
        return await this.commands.isWebElementEnabled(this.continueButLoc)
    }
    async clickContinue() {
        await this.commands.clickWebElement(this.continueButLoc)
    }



    async clickTermsAndCLink() {
        await this.commands.clickWebElement(this.termsAndConditionsLoc)
    }
    async clickPrivacyLink() {
        await this.commands.clickWebElement(this.privacyLoc)
    }



    async emailErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.emailError)
    }
    async firstNameErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.firstNameError)
    }
    async lastNameErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.lastNameError)
    }


}
module.exports = HotelsSignUp