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

export const getServiceName = (): string => {
    const services = process.env.SERVICE;
    return services ? services : 'selenium-standalone';
}

export const browserInstance = (): number => {
    const instanceCount = process.env.INSTANCE;
    return instanceCount && Number(instanceCount) > 1 ? Number(instanceCount) : 1;
}

export const retryOnFailure = (): number => {
    const retryCount = process.env.RETRY;
    return retryCount ? Number(retryCount) : 0;
}