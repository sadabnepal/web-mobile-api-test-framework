import { WebdriverIOElement } from '../types/customElement';

export const waitForElementToBeDisplayed = async (element: WebdriverIOElement, waitTime?: number) => {
    if (waitTime) {
        await element.waitForDisplayed({ timeout: waitTime });
    } else {
        await element.waitForDisplayed();
    }
}

export const waitUntilTextLoaded = async (element: WebdriverIOElement, expectedText: string) => {
    await element.waitUntil(async () => await element.getText() === expectedText, { timeout: 10000, interval: 100 });
}
