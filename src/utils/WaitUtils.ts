import conf from "src/config/conf";
import { WaitEnum } from "../enums/WaitEnum";

class WaitUtils {

    WaitFactory(elememt: WebdriverIO.Element, waittype: WaitEnum): WebdriverIO.Element {
        if (waittype === "DISPLAYED") {
             browser.waitUntil(() => elememt.isDisplayed() === true, {timeout: conf.timeout, timeoutMsg: JSON.stringify(elememt.selector) + " is not displayed"});
             elememt.scrollIntoView()
             return elememt;
        } 
        else if (waittype === "CLICKABLE") {
            browser.waitUntil(() => elememt.isClickable() === true, {timeout: conf.timeout,  timeoutMsg: JSON.stringify(elememt.selector) + " is not clickable"});         
            elememt.scrollIntoView()
            return elememt;
        } 
        else if (waittype === "ENABLED") {
            browser.waitUntil(() => elememt.isEnabled() === true, {timeout: conf.timeout, timeoutMsg: JSON.stringify(elememt.selector) + " is not enabled"});  
            elememt.scrollIntoView()
            return elememt;
        } 
        else if (waittype === "EXIST") {
            browser.waitUntil(() => elememt.isExisting() === true, {timeout: conf.timeout, timeoutMsg: JSON.stringify(elememt.selector) + " is not existing"});  
            elememt.scrollIntoView()
            return elememt;
        } 
        else {
            return elememt;
        }
    }

    waitUntillCondition(condition:boolean, timeout:number, timeoutmsg: string) {
        browser.waitUntil(()=> condition, {timeout: timeout, timeoutMsg: timeoutmsg})
    }

    waitForElementToBeDisplayed(element:WebdriverIO.Element, time?:number) {
        if(time == undefined) {
            element.waitForDisplayed();
        } else {
            element.waitForDisplayed({timeout: time});
        }
    }

    waitUntilTheTextGetsLoaded(element:WebdriverIO.Element, expectedText:string) {
        element.waitUntil(
            ()=> { return element.getText() === expectedText; },
            {  timeout: 10000, interval: 100 }
        );
    }
    
}
export default new WaitUtils()