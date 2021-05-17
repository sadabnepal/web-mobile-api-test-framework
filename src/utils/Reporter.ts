import allure from '@wdio/allure-reporter'

class Reporter{

    /***Logs a step to Allure report and prints the same to console 
     * @param {String} step details to log into report
     * 
    */
   logStep(step): void{
       allure.addStep(step)
       console.log('STEP', step) 
   }


 /**
  * attaches a screenshot to the report
  * @param {string} message  the details to log
  * @param screenshot the screenshot to attach to a report
  */
  attachScreenshot (message, screenshot):void {
    console.log('screenshot: ', screenshot)
    allure.addAttachment('Error', Buffer.from(screenshot, 'base64'), 'image/png') 
  }


}

export default new Reporter();