import { DockerBrowserCapabilities } from './capabilities';
import { config as bddConfig } from './wdio.conf.e2e';

export const config: WebdriverIO.Config = {
    ...bddConfig,
    hostname: 'localhost',
    port: 4444,
    path: '/',
    maxInstances: 5,
    capabilities: DockerBrowserCapabilities,
    services: ['docker']
}
