import { WebdriverIOElement } from "../types/webelements"

export const waitAndclick = async (element: WebdriverIOElement, waitTime?: number) => {
    await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
    await element.click()
}

export const waitAndEnterData = async (element: WebdriverIOElement, value: string | number, waitTime?: number) => {
    await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
    await element.setValue(value);
}
