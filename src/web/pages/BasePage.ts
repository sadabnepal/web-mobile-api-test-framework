import { WebdriverIOElement, WebdriverIOElements } from "@UITypes/webelements";

export default class BasePage {

    protected open(path: string) {
        return browser.url(path)
    }

    protected async clickElement(element: WebdriverIOElement) {
        await element.click()
    }

    protected async waitAndclick(element: WebdriverIOElement, waitTime?: number) {
        await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
        await element.click()
    }

    protected async enterData(element: WebdriverIOElement, value: string | number) {
        await element.clearValue();
        await element.setValue(value);
    }

    protected async waitAndEnterData(element: WebdriverIOElement, value: string | number, waitTime?: number) {
        await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
        await element.clearValue();
        await element.setValue(value);
    }

    protected async scrollToElement(element: WebdriverIOElement) {
        await element.scrollIntoView();
    }

    protected async selectDropdownByText(element: WebdriverIOElement, text: string) {
        await element.selectByVisibleText(text)
    }

    protected async clickOnClassMatchingElement(elements: WebdriverIOElements, text: string) {
        await elements.forEach(async (element) => {
            if ((await element.getAttribute('class')).includes(text)) {
                await element.click()
            }
        })
    }
}
