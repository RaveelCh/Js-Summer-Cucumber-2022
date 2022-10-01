const Commands = require("../../Utils/Commands");

const commands = new Commands

class HotelsHome {

rewardsLocator = "//a[text()= 'Learn about Hotels.com Rewards']"
joinNowLocator = "//a[text()='JOIN NOW']"
emailAddressFieldLocator = "//label[text()='Email address']"
firstNameFieldLocator = "//label[text()='First name']"
lastNameFieldLocator = "//label[text()='Last name']"
passwordFieldLocator = "//label[text()='Password']"
continueButtonLocator = "//button[text()='Continue']"


async clickRewards() {
    await commands.clickWebElement(this.rewardsLocator)
}

async clickJoinNow() {
    await commands.clickWebElement(this.joinNowLocator)
}


}

module.exports = HotelsHome