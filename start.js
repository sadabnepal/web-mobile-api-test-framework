const { execSync } = require('child_process')
const { Select } = require('enquirer');

const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['UI', 'API', 'Mobile']
})

const RUNNER_SERVICE = new Select({
    name: 'runmode',
    message: 'Where do you want to run your tests?',
    choices: ['Local', 'Docker']
})

const UI_TEST_TYPE = new Select({
    name: 'runmode',
    message: 'Which framework do you want to run?',
    choices: ['Mocha', 'Cucumber']
})

let runnerCommand = {
    apiRunner: () => { execSync('cd api&&npm run test', { stdio: 'inherit' }) },
    mobileRunner: () => { execSync('cd mobile&&npm run test', { stdio: 'inherit' }) },
    localMochaRunner: () => execSync('cd web&&npm run test', { stdio: 'inherit' }),
    dockerMochaRunner: () => {
        execSync('cd web&&npm run test:docker', { stdio: 'inherit' })
    },
    localBDDRunner: () => execSync('cd web&&npm run test:e2e', { stdio: 'inherit' }),
    dockerBDDRunner: () => {
        execSync('cd web&&npm run test:e2e:docker', { stdio: 'inherit' })
    }
}

const configRunner = async () => {
    let answers = await TEST_MODULE.run();
    switch (answers) {
        case "API": runnerCommand.apiRunner()
            break;
        case "Mobile": runnerCommand.mobileRunner()
            break;
        case "UI":
            let ui_test_type = await UI_TEST_TYPE.run();
            if (ui_test_type == 'Mocha') {
                let mocha_runmode = await RUNNER_SERVICE.run();
                if (mocha_runmode == 'Local') { runnerCommand.localMochaRunner() }
                else if (mocha_runmode == 'Docker') { runnerCommand.dockerMochaRunner() }
            }
            else if (ui_test_type == 'Cucumber') {
                let bdd_runmode = await RUNNER_SERVICE.run();
                if (bdd_runmode == 'Local') { runnerCommand.localBDDRunner() }
                else if (bdd_runmode == 'Docker') { runnerCommand.dockerBDDRunner() }
            }
            break;
        default: throw new Error("Please select option from ::  api | mocha | cucumber")
    }
}

configRunner()