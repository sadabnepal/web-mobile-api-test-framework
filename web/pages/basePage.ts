import { WebdriverIOElement, WebdriverIOElements } from "../types/webelements";

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

    protected async waitAndClick(element: WebdriverIOElement, waitTime?: number) {
        await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
        await element.click()
        logStep(`clicked on Element: ${await element.selector}`);
    }

    protected async enterData(element: WebdriverIOElement, value: string | number) {
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value : ${value} on element: ${await element.selector}`);
    }

    protected async waitAndEnterData(element: WebdriverIOElement, value: string | number, waitTime?: number) {
        await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value: ${value} on Element: ${await element.selector} `);
    }

    protected async scrollToElement(element: WebdriverIOElement) {
        await element.scrollIntoView();
        logStep(`Scrolled to Element: ${await element.selector}`);
    }

    protected async selectDropdownByText(element: WebdriverIOElement, text: string) {
        await element.selectByVisibleText(text)
        logStep(`Selected Element: ${await element.selector} by visible text: ${text}`);
    }

    protected async clickOnMatchingText(elements: WebdriverIOElements, expectedText: string) {
        await elements.forEach(async element => {
            if (await element.getText() === expectedText) {
                await element.click();
                logStep(`Clicked on matching text: ${expectedText}`);
            }
        })
    }
}
