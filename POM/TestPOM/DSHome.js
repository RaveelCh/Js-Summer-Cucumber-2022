const Commands = require("../../Utils/Commands");

const commands = new Commands

class DSHomepage {

TimelineData

minTempOnTL = '//a[@class="day revealed"]//span[@class="minTemp"]'

maxTempOnTL = '//a[@class="day revealed"]//span[@class="maxTemp"]'

minTempInTL = '//div[@class="dayDetails revealed"]//span[@class="highTemp swip"]//span[@class="temp"]'

maxTempInTL = '//div[@class="dayDetails revealed"]//span[@class="lowTemp swap"]//span[@class="temp"]'

async clickPlusToday() {
   await commands.clickWebElement()
}

}

module.exports = DSHomepage