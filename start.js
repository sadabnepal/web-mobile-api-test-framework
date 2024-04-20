const { execSync } = require('child_process')
const { Select } = require('enquirer');
const { join } = require("path");
const { existsSync } = require('fs');
const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['UI', 'API', 'Mobile']
})

const RUNNER_SERVICE = new Select({
    name: 'runMode',
    message: 'Where do you want to run your tests?',
    choices: ['Local', 'Docker']
})

const UI_TEST_TYPE = new Select({
    name: 'runMode',
    message: 'Which framework do you want to run?',
    choices: ['Mocha', 'Cucumber']
})

const runnerCommand = {
    apiRunner: () => { execSync('cd api&&npm run test', { stdio: 'inherit' }) },
    mobileRunner: () => { execSync('cd mobile&&npm run test', { stdio: 'inherit' }) },
    localMochaRunner: () => execSync('cd web&&npm run test', { stdio: 'inherit' }),
    dockerMochaRunner: () => { execSync('cd web&&npm run test:docker', { stdio: 'inherit' }) },
    localBDDRunner: () => execSync('cd web&&npm run test:e2e', { stdio: 'inherit' }),
    dockerBDDRunner: () => { execSync('cd web&&npm run test:e2e:docker', { stdio: 'inherit' }) }
}

const API_NODE_MODULES_PATH = join(process.cwd(), 'api', 'node_modules');
const MOBILE_NODE_MODULES_PATH = join(process.cwd(), 'mobile', 'node_modules');
const WEB_NODE_MODULES_PATH = join(process.cwd(), 'web', 'node_modules');

const isNodeModuleDoesNotExists = (path) => {
    if (!existsSync(path)) {
        console.log(`'node_modules' folder is missing!!! Starting installation...`);
        return true;
    }
    else return false;
}

const installerCommand = {
    api: () => { execSync('cd api&&npm install', { stdio: 'inherit' }) },
    mobile: () => { execSync('cd mobile&&npm install', { stdio: 'inherit' }) },
    web: () => execSync('cd web&&npm install', { stdio: 'inherit' }),
}

const nodeModuleInstaller = {
    api: () => {
        if (isNodeModuleDoesNotExists(API_NODE_MODULES_PATH))
            installerCommand.api();
    },
    mobile: () => {
        if (isNodeModuleDoesNotExists(MOBILE_NODE_MODULES_PATH))
            installerCommand.mobile();
    },
    web: () => {
        if (isNodeModuleDoesNotExists(WEB_NODE_MODULES_PATH))
            installerCommand.web();
    }
}

const configRunner = async () => {
    const answers = await TEST_MODULE.run();
    switch (answers) {
        case "API":
            nodeModuleInstaller.api();
            runnerCommand.apiRunner();
            break;
        case "Mobile":
            nodeModuleInstaller.mobile();
            runnerCommand.mobileRunner();
            break;
        case "UI":
            nodeModuleInstaller.web();
            const webTestType = await UI_TEST_TYPE.run();
            if (webTestType == 'Mocha') {
                const mochaRunMode = await RUNNER_SERVICE.run();
                if (mochaRunMode == 'Local') { runnerCommand.localMochaRunner() }
                else if (mochaRunMode == 'Docker') { runnerCommand.dockerMochaRunner() }
            }
            else if (webTestType == 'Cucumber') {
                const bddRunMode = await RUNNER_SERVICE.run();
                if (bddRunMode == 'Local') { runnerCommand.localBDDRunner() }
                else if (bddRunMode == 'Docker') { runnerCommand.dockerBDDRunner() }
            }
            break;
        default: throw new Error("Please select option from ::  api | web | mobile")
    }
}

configRunner()