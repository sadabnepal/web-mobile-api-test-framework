import path from 'path';

export const MOCHA_OUTPUT_DIR = "reports/mocha/";
export const CUCUMBER_REPORT_DIR = "reports/cucumber/";
export const CUCUMBER_JSON_REPORT_DIR = "reports/cucumber/json/";
export const CUCUMBER_SCREENSHOT_REPORT_DIR = "reports/cucumber/screenshots/";

export const MAILER_PATH = {
    SOURCE_CUCUMBER_HTML: path.join(process.cwd(), 'reports', 'cucumber', 'cucumber-report.html'),
    DESTINATION_CUCUMBER_COMPRESS: path.join(process.cwd(), 'reports', 'cucumber-report.zip'),
    PNG_REPORT: path.join(process.cwd(), 'reports', 'cucumber', 'cucumber-report.png')
}