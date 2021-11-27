import { ChainablePromiseElement } from 'webdriverio';

export const waitForElementToBeDisplayed = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, waitTime?: number) => {
    if (waitTime) {
        await element.waitForDisplayed({ timeout: waitTime });
    } else {
        await element.waitForDisplayed();
    }
}

export const waitUntilTextLoaded = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, expectedText: string) => {
    await element.waitUntil(async () => await element.getText() === expectedText, { timeout: 10000, interval: 100 });
}
