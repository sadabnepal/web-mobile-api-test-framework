import { WebdriverIOElement, WebdriverIOElements } from "@UITypes/webelements"

export const clickElement = async (element: WebdriverIOElement) => {
    await element.click()
}

export const waitAndclick = async (element: WebdriverIOElement, waitTime?: number) => {
    await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
    await element.click()
}

export const enterData = async (element: WebdriverIOElement, value: string | number) => {
    await element.clearValue();
    await element.setValue(value);
}

export const waitAndEnterData = async (element: WebdriverIOElement, value: string | number, waitTime?: number) => {
    await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
    await element.clearValue();
    await element.setValue(value);
}

export const scrollToElement = async (element: WebdriverIOElement) => {
    await element.scrollIntoView();
}

export const selectDropdownByText =async (element:WebdriverIOElement, text:string) => {
    await element.selectByVisibleText(text)
}

export const clickOnClassMatchingElement = async (elements: WebdriverIOElements, text:string) => {
    await elements.forEach(async (element) => {
        if ((await element.getAttribute('class')).includes(text)) {
            await element.click()
        }
    })
}
