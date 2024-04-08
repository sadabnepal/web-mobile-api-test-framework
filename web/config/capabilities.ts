import { RUN_MODE } from "../utils/envReader";

const browserOptions = {
    args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--window-size=1440,735'
    ],
}

const browserOptionsHeadless = {
    args: [...browserOptions.args, "--headless"]
}

export const chromeCapabilities = [
    {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': RUN_MODE === "LOCAL" ? browserOptions : browserOptionsHeadless
    }
]

export const multipleBrowserCapabilities = [
    {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': RUN_MODE === "LOCAL" ? browserOptions : browserOptionsHeadless
    },
    {
        maxInstances: 1,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': RUN_MODE === "LOCAL" ? browserOptions : browserOptionsHeadless
    },
    // {
    //     maxInstances: 1,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     'moz:firefoxOptions':  RUN_MODE === "LOCAL" ? browserOptions : browserOptionsHeadless
    // }
]

export const DockerBrowserCapabilities = [
    ...chromeCapabilities,
    {
        maxInstances: 1,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': browserOptionsHeadless
    },
    // {
    //     maxInstances: 1,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     'moz:firefoxOptions': browserOptionsHeadless
    // }
]