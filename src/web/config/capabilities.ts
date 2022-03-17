import { env_headless } from '@UIUtils/envreader'

const browserOptions = {
    args: [
        '--no-sandbox',
        '--disable-infobars',
        '--headless',
        '--disable-gpu',
        '--window-size=1440,735'
    ],
}

const browserOptionsVNC = {
    args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--window-size=1440,735'
    ],
}

export const chromeCapabilities = [
    {
        maxInstances: env_headless === "TRUE" ? 2 : 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': env_headless === "TRUE" ? browserOptions : browserOptionsVNC
    }
]

export const multipleBrowserCapabilities = [
    ...chromeCapabilities,
    {
        maxInstances: env_headless === "TRUE" ? 2 : 1,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': env_headless === "TRUE" ? browserOptions : browserOptionsVNC
    },
    // {
    //     maxInstances: env_headless === "TRUE" ? 2 : 1,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     'moz:firefoxOptions': env_headless === "TRUE"? browserOptions: browserOptionsVNC
    // }
]