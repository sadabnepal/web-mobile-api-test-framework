import { WebdriverIOElement, WebdriverIOElements } from '../../types/customElement';
import { addLog } from "./allureLogs";

/*
Use this wrapper methods only when you want to add assertion logs in allure report
*/
class AssertionUtils {

    async assertToHaveText(element: WebdriverIOElement, value: string) {
        await expect(element).toHaveText(value);
        addLog(`Validated text: '${value}'`)
    }

    async assertTextContaining(element: WebdriverIOElement, value: string) {
        await expect(element).toHaveTextContaining(value);
        addLog(`Validated text contains '${value}'`)
    }

    async assertToBeDisplayed(element: WebdriverIOElement, fieldname?: string) {
        await expect(element).toBeDisplayed();
        if (fieldname != undefined) { addLog(`'${fieldname}' is displayed`) }
    }

    async assertNoToBeDisplayed(element: WebdriverIOElement, fieldname?: string) {
        await expect(element).not.toBeDisplayed();
        if (fieldname != undefined) { addLog(`'${fieldname}' is not displayed`) }
    }

    async assertToExists(element: WebdriverIOElement, fieldname?: string) {
        await expect(element).toExist();
        if (fieldname != undefined) { addLog(`'${fieldname}' exists`) }
    }

    async assertUrlContaining(partialUrl: string) {
        expect(browser).toHaveUrlContaining(partialUrl);
        addLog(`URL contains: '${partialUrl}'`)
    }

    async assertToBeTrue(condition: Promise<boolean>, logMsg?: string) {
        await expect(condition).toBeTruthy()
        if (logMsg) { addLog(logMsg) }
    }

    assertNotToBeTrue(condition: boolean, logMsg?: string) {
        expect(condition).toBeFalsy()
        if (logMsg) { addLog(logMsg) }
    }

    async assertToHaveLength(element: WebdriverIOElements, count: number) {
        await expect(element).toHaveLength(count)
        addLog(`Validated count is: ${count}`)
    }

    async assertToHaveValue(element: WebdriverIOElement, value: string, fieldname?: string) {
        await expect(element).toHaveValue(value);
        addLog(`Validated value of ${fieldname} : '${value}'`)
    }

    async assertToHaveValueContaining(element: WebdriverIOElement, value: string, fieldname?: string) {
        await expect(element).toHaveValueContaining(value);
        addLog(`Validated value of ${fieldname} contains: '${value}'`)
    }

    assertToEqual(element: string, value: string) {
        expect(element).toEqual(value)
        addLog(`Validated equal to: '${value}'`)
    }

    assertToEqualInt(actual: number, expected: number) {
        expect(actual).toEqual(expected)
        addLog(`Validated equal to: '${actual}'`)
    }
}
export default new AssertionUtils()