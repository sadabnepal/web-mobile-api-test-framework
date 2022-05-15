import { DockerBrowserCapabilities } from './capabilities';
import { config as bddconfig } from './wdio.conf.e2e';

export const config: WebdriverIO.Config = {
    ...bddconfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: DockerBrowserCapabilities,
    services: ['docker']
}
