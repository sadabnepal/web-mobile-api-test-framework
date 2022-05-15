import { DockerBrowserCapabilities } from "./capabilities";
import { config as mochaconfig } from "./wdio.conf";

export const config: WebdriverIO.Config = {
    ...mochaconfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: DockerBrowserCapabilities,
    services: ['docker']
}
