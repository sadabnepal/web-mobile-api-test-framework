export const BrowserCapabilities = [
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

export const DockerBrowserCapabilities = [
    ...BrowserCapabilities,
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
    }
]