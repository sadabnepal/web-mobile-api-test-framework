import path from 'path';

export const MOCHA_OUTPUT_DIR = path.join(process.cwd(), 'reports', 'mocha');
export const CUCUMBER_REPORT_DIR = path.join(process.cwd(), 'reports', 'cucumber');
export const CUCUMBER_JSON_REPORT_DIR = path.join(CUCUMBER_REPORT_DIR);
export const CUCUMBER_SCREENSHOT_REPORT_DIR = path.join(CUCUMBER_REPORT_DIR, "screenshots");
export const MAIL_JSON_CUCUMBER_DIR = path.join(process.cwd(), 'reports', 'cucumermail');

export const MAILER_PATH = {
    SOURCE_CUCUMBER_HTML: path.join(CUCUMBER_REPORT_DIR, 'cucumber-report.html'),
    DESTINATION_CUCUMBER_COMPRESS: path.join(process.cwd(), 'reports', 'cucumber-report.zip'),
    WDIO_JSON_CUCUMBER_FILE: path.join(MAIL_JSON_CUCUMBER_DIR, 'merged_result.json'),
    WDIO_JSON_MOCHA_FILE: path.join(MOCHA_OUTPUT_DIR, 'wdio-ma-merged.json'),
}