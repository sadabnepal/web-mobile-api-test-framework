var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    brandTitle: "Cucumber HTML Report",
    jsonDir: 'reports/cucumber/',
    output: 'reports/cucumber/cucumber-report.html',
    screenshotsDirectory: 'reports/screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    ignoreBadJsonFile: true,
    launchReport: false,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  96",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

reporter.generate(options);