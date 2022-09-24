const Commands = require("../../Utils/Commands");

class HotelsFeedback {

    commands = new Commands

    // oneStarLocator = "//*[@id='page-rating-1']"
    // twoStarLocator = "//*[@id='page-rating-2]"
    // threeStarLocator = "//*[@id='page-rating-3']"
    // fourStarLocator = "//*[@id='page-rating-4']"
    fiveStarLocator = '//body/div[@id="container"]/div[@id="survey"]/fieldset[@id="required_box_page_rating"]/div[1]/div[5]/label[1]'

    likelyToReturnDropdown = "#will-you-return"

    pageCommentLoc = "//*[@id='verbatim']"

    bookedBeforeStarts = "//label[@for='booked-here-before-"
    bookedBeforeEnds = "']"

    didAccomplishStarts = "//label[@for='were-you-successful-"
    didAccomplishEnds = "']"

    submitLocator = "//*[@id='submit-button']"

    thankYouFeedback = "//*[@id='thank-you']"

    feedbackError = "//*[@id='required-page-rating']"
    errorBorder = '//fieldset[@id="required_box_page_rating"]'

    async didYouAccomplishYesOrNo(value){
        const locator = this.didAccomplishStarts + value.toLowerCase() + this.didAccomplishEnds;
        await this.commands.clickWebElement(locator);
    }

    async bookedHereBeforeYesOrNo(value){
        const locator = this.bookedBeforeStarts + value.toLowerCase() + this.bookedBeforeEnds;
        await this.commands.clickWebElement(locator);
    }

    async likelyToReturn(text){
        await this.commands.selectFromDropdown(this.likelyToReturnDropdown, text);
    }

    async clickSubmit() {
        await this.commands.clickWebElement(this.submitLocator);
    }


    async clickComment() {
        await this.commands.clickWebElement(this.pageCommentLoc);
    }
    async typeComment(comments) {
        await this.commands.typeInWebElement(this.pageCommentLoc, comments);
    }


    // async click1Star() {
    //     await this.commands.clickWebElement(this.oneStarLocator);
    // }
    // async click2Star() {
    //     await this.commands.clickWebElement(this.twoStarLocator);
    // }    
    // async click3Star() {
    //     await this.commands.clickWebElement(this.threeStarLocator);
    // }
    // async click4Star() {
    //     await this.commands.clickWebElement(this.fourStarLocator);
    // }
    async click5Star() {
        await this.commands.clickWebElement(this.fiveStarLocator);
    }


    async thankYouFeedbackDisplayed() {
        return await this.commands.isWebElementDisplayed(this.thankYouFeedback);
    }


    async feedbackErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.feedbackError);
    }

    async errorBorderDisplayed (){
        return await this.commands.isWebElementDisplayed(this.errorBorder)
    }

}

module.exports = HotelsFeedback