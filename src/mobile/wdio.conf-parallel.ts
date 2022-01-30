import { multiDeviceCapabalities } from "./src/config/capabilities";
import { config as baseConfig} from "./wdio.conf";

export const config = {
    ...baseConfig,
    capabilities: multiDeviceCapabalities
}