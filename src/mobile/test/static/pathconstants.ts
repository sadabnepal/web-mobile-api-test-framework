import { join } from 'path';

export const ANDROID_APP_PATH = join(process.cwd(), 'src', 'mobile', 'app', 'android', 'ApiDemos-debug.apk')
export const MOCHA_OUTPUT_DIR = join(process.cwd(), 'reports', 'appium');