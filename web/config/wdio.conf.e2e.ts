import type { Options } from '@wdio/types';
import { join } from 'path';
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import { CUCUMBER_JSON_REPORT_DIR, CUCUMBER_REPORT_DIR, MAIL_JSON_CUCUMBER_DIR } from '../static/pathConstants';
import { deleteDirectory } from '../utils/fileSystem';
import { chromeCapabilities } from "./capabilities";

export const config: Options.Testrunner = {
    // ====================
    // Runner Configuration
    // ====================

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        join(process.cwd(), 'tests', 'cucumber', 'features', '*.feature')
    ],
    exclude: [],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: chromeCapabilities,

    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: [],
    framework: 'cucumber',
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    specFileRetriesDeferred: false,
    reporters: ['spec',
        ['cucumberjs-json', {
            jsonFolder: CUCUMBER_JSON_REPORT_DIR,
            language: 'en',
        }],
        ['json', {
            outputDir: MAIL_JSON_CUCUMBER_DIR,
            outputFileFormat: (opts: any) => {
                return `results-${opts.cid}.${opts.capabilities}.json`
            }
        }]
    ],

    cucumberOpts: {
        retry: 0,
        require: ['./tests/cucumber/steps/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        deleteDirectory(CUCUMBER_REPORT_DIR);
        deleteDirectory(MAIL_JSON_CUCUMBER_DIR);
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     * Runs before a Cucumber scenario
     */
    // beforeScenario: function (world) {
    // },
    /**
     * Runs before a Cucumber step
     */
    // beforeStep: function (step, context) {
    // },
    /**
     * Runs after a Cucumber step
     */
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },
    /**
     * Runs after a Cucumber scenario
     */
    // afterScenario: function (world) {
    // },
    /**
     * Runs after a Cucumber feature
     */
    // afterFeature: function (uri, feature) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
        const mergeResults = require('@wdio/json-reporter/mergeResults');
        mergeResults(MAIL_JSON_CUCUMBER_DIR, 'results-*', '/merged_result.json');
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
