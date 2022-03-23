import { env_headless, env_instance } from '../utils/envreader'

const browserOptions = {
    args: [
        '--no-sandbox',
        '--disable-infobars',
        '--headless',
        '--disable-gpu',
        '--window-size=1440,735'
    ],
}

const browserOptionsHeadless = {
    args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--window-size=1440,735'
    ],
}

export const chromeCapabilities = [
    {
        maxInstances: env_instance,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': env_headless === "TRUE" ? browserOptions : browserOptionsHeadless
    }
]

export const multipleBrowserCapabilities = [
    ...chromeCapabilities,
    {
        maxInstances: env_instance,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': env_headless === "TRUE" ? browserOptions : browserOptionsHeadless
    },
    // {
    //     maxInstances: env_headless === "TRUE" ? 2 : 1,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     'moz:firefoxOptions': env_headless === "TRUE"? browserOptions: browserOptionsVNC
    // }
]