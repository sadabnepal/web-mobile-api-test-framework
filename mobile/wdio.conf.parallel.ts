import type { Options } from '@wdio/types';
import { androidMultiDeviceCapabilities } from './config/capabilities';
import { config as baseConfig } from './wdio.conf';

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: androidMultiDeviceCapabilities,
}