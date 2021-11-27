export const BrowserCapabilities = [
    {
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }
]

export const getServiceName = (): string => {
    if (process.env.SERVICE) {
        return process.env.SERVICE;
    }
    else {
        return 'selenium-standalone';
    }
}

export const browserInstance = (): number => {
    if (process.env.INSTANCE && Number(process.env.INSTANCE) > 1) {
        return Number(process.env.INSTANCE);
    }
    else {
        return 1;
    }
}

export const retryOnFailure = (): number => {
    if (process.env.RETRY) {
        return Number(process.env.RETRY)
    } else {
        return 1;
    }
}