import { androidMultiDeviceCapabalities } from './config/capabilities';
import { config as baseConfig } from "./wdio.conf";

export const config = {
    ...baseConfig,
    capabilities: androidMultiDeviceCapabalities,
}