const Commands = require("../../Utils/Commands");

class HotelsSignIn {

    commands = new Commands

    emailLocator = "//*[@id='loginFormEmailInput']"
    passwordLocator = "//*[@id='loginFormPasswordInput']"
    signInErrorLocator = "//div[@class='uitk-error-summary']"
    logInFormSubButton = "//*[@id='loginFormSubmitButton']"

    

async typeEmail(userEmail) {
    await this.commands.typeInWebElement(this.emailLocator, userEmail)
}

async typePwd(userPwd) {
    await this.commands.typeInWebElement(this.passwordLocator, userPwd)
}

async clickLogInForm() {
    await this.commands.clickWebElement(this.logInFormSubButton)
}

async signInErrorDisplayed() {
    return await this.commands.isWebElementDisplayed(this.signInErrorLocator)
}

}

module.exports = HotelsSignIn