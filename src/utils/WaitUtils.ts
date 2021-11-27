import { ChainablePromiseElement } from 'webdriverio';

class WaitUtils {

    async waitForElementToBeDisplayed(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, waitTime?: number) {
        if (waitTime) {
            await element.waitForDisplayed({ timeout: waitTime });
        } else {
            await element.waitForDisplayed();
        }
    }

    async waitUntilTextLoaded(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText: string) {
        await element.waitUntil(async () => await element.getText() === expectedText, { timeout: 10000, interval: 100 });
    }

}
export default new WaitUtils()