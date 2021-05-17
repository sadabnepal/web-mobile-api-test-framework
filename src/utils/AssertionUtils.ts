import Reporter from "./Reporter";
class AssertionUtils {

    assertToHaveText(element:WebdriverIO.Element, value:string):void {
        expect(element).toHaveText(value);
        Reporter.logStep(`Validated text: '${value}'`)
    }
    
    assertTextContaining(element:WebdriverIO.Element, value:string):void {
        expect(element).toHaveTextContaining(value);
        Reporter.logStep(`Validated text contains '${value}'`)
    }

    assertToBeDisplayed(element:WebdriverIO.Element, fieldname?:string):void {
        expect(element).toBeDisplayed();
        if(fieldname != undefined) { Reporter.logStep(`'${fieldname}' is displayed`) }
    }

    assertNoToBeDisplayed(element:WebdriverIO.Element, fieldname?:string):void {
        expect(element).not.toBeDisplayed();
        if(fieldname != undefined) { Reporter.logStep(`'${fieldname}' is not displayed`) }
    }

    assertToExists(element:WebdriverIO.Element, fieldname?:string):void {
        expect(element).toExist();
        if(fieldname != undefined) { Reporter.logStep(`'${fieldname}' exists`) }
    }

    assertUrlContaining(partialUrl:string) {
        expect(browser).toHaveUrlContaining(partialUrl);
        Reporter.logStep(`URL contains: '${partialUrl}'`)
    }

    assertToBeTrue(condition:boolean, logMsg?:string) {
        expect(condition).toBeTruthy()
        if(logMsg !== undefined) { Reporter.logStep(logMsg) }
    }

    assertNotToBeTrue(condition:boolean, logMsg?:string) {
        expect(condition).toBeFalsy()
        if(logMsg !== undefined) { Reporter.logStep(logMsg) }
    }

    assertToHaveLength(element: WebdriverIO.ElementArray, count:number) {
        expect(element).toHaveLength(count)
        Reporter.logStep(`Validated count is: ${count}`)
    }

    assertToHaveValue(element:WebdriverIO.Element, value:string, fieldname?:string):void {
        expect(element).toHaveValue(value);
        Reporter.logStep(`Validated value of ${fieldname} : '${value}'`)
    }

    assertToHaveValueContaining(element:WebdriverIO.Element, value:string, fieldname?:string):void {
        expect(element).toHaveValueContaining(value);
        Reporter.logStep(`Validated value of ${fieldname} contains: '${value}'`)
    }

    assertToEqual(element:string, value:string) {
        expect(element).toEqual(value)
        Reporter.logStep(`Validated equal to: '${value}'`)
    }

    assertToEqualInt(actual:number, expected:number) {
        expect(actual).toEqual(expected)
        Reporter.logStep(`Validated equal to: '${actual}'`)
    }
}
export default new AssertionUtils()