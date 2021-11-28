import { Options, generate } from 'cucumber-html-reporter';
import { CUCUMBER_JSON_REPORT_DIR, CUCUMBER_REPORT_DIR, CUCUMBER_SCREENSHOT_REPORT_DIR } from '../src/static/pathConstants';

let options: Options = {
    theme: 'bootstrap',
    brandTitle: "WebdriverIO Cucumber Report",
    jsonDir: CUCUMBER_JSON_REPORT_DIR,
    output: `${CUCUMBER_REPORT_DIR}cucumber-report.html`,
    screenshotsDirectory: CUCUMBER_SCREENSHOT_REPORT_DIR,
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    ignoreBadJsonFile: true,
    launchReport: false,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome 96",
        "Platform": process.platform,
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

generate(options);