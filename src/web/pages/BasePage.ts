import { WebdriverIOElement, WebdriverIOElements } from "@UITypes/webelements";

const logStep = (logMessage: string) => console.log(`STEP || ${logMessage}`);

export default class BasePage {

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path)
    }

    protected async clickElement(element: WebdriverIOElement) {
        await element.click()
        logStep(`Clicked on Element: ${await element.selector}`);
    }

    protected async waitAndclick(element: WebdriverIOElement, waitTime?: number) {
        let time = waitTime ? waitTime : 10000
        await element.waitForClickable({ timeout: time })
        await element.click()
        logStep(`waited for ${time} and clicked on Element: ${await element.selector}`);
    }

    protected async enterData(element: WebdriverIOElement, value: string | number) {
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value : ${value} on element: ${await element.selector}`);
    }

    protected async waitAndEnterData(element: WebdriverIOElement, value: string | number, waitTime?: number) {
        let time = waitTime ? waitTime : 10000
        await element.waitForEnabled({ timeout: time });
        await element.clearValue();
        await element.setValue(value);
        logStep(`waited for ${time} and entered value : ${value} on Element: ${await element.selector}`);
    }

    protected async scrollToElement(element: WebdriverIOElement) {
        await element.scrollIntoView();
        logStep(`Scrolled to Element: ${await element.selector}`);
    }

    protected async selectDropdownByText(element: WebdriverIOElement, text: string) {
        await element.selectByVisibleText(text)
        logStep(`Selected Element: ${await element.selector} by visible text: ${text}`);
    }

    protected async clickOnClassMatchingElement(elements: WebdriverIOElements, text: string) {
        await elements.forEach(async (element) => {
            if ((await element.getAttribute('class')).includes(text)) {
                await element.click()
            }
        })
    }
}
