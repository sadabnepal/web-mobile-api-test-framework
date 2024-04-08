import { DockerBrowserCapabilities } from "./capabilities";
import { config as mochaConfig } from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...mochaConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: DockerBrowserCapabilities,
    services: ['docker']
}
