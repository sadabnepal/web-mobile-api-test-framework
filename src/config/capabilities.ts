export const chromeCapabilities = [
    {
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }
]

export const multipleBrowserCapabilities = [
    ...chromeCapabilities,
    {
        maxInstances: 2,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    },
    // {
    //     maxInstances: 2,
    //     browserName: 'firefox',
    //     acceptInsecureCerts: true,
    //     'moz:firefoxOptions': {
    //         args: [
    //             '--no-sandbox',
    //             '--disable-infobars',
    //             '--headless',
    //             '--disable-gpu',
    //             '--window-size=1440,735'
    //         ],
    //     }
    // }
]