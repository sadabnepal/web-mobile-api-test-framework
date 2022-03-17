import { WebdriverIOElement } from '@UITypes/webelements';

export const waitForElementToBeDisplayed = async (element: WebdriverIOElement, waitTime?: number) => {
    await element.waitForDisplayed({ timeout: waitTime ? waitTime : 10000 });
}

export const waitUntilTextLoaded = async (element: WebdriverIOElement, expectedText: string) => {
    await element.waitUntil(async () => await element.getText() === expectedText, { timeout: 10000, interval: 100 });
}
