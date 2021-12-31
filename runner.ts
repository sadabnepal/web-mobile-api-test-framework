import { execSync } from 'child_process'

const { prompt, Select, NumberPrompt, MultiSelect, List, Confirm } = require('enquirer');

const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['api', 'mocha', 'cucumber']
})

const RUNNER_SERVICE = new Select({
    name: 'runmode',
    message: 'Where do you want to run your tests?',
    choices: ['local', 'docker']
})

let runnerCommand = {
    apiRunner: () => { execSync('npm run test:api', { stdio: 'inherit' }) },
    localMochaRunner: () => execSync('npm run test', { stdio: 'inherit' }),
    dockerMochaRunner: () => {
        execSync('npm run test:docker', { stdio: 'inherit' })
    },
    localBDDRunner: () => execSync('npm run test:e2e', { stdio: 'inherit' }),
    dockerBDDRunner: () => {
        execSync('npm run test:e2e:docker', { stdio: 'inherit' })
    }
}

const configRunner = async () => {
    let answers = await TEST_MODULE.run();
    switch (answers) {
        case "api": runnerCommand.apiRunner()
            break;
        case "mocha":
            let mocha_runmode = await RUNNER_SERVICE.run();
            if (mocha_runmode == 'local') { runnerCommand.localMochaRunner() }
            else if (mocha_runmode == 'docker') { runnerCommand.dockerMochaRunner() }
            break;
        case "cucumber":
            let bdd_runmode = await RUNNER_SERVICE.run();
            if (bdd_runmode == 'local') { runnerCommand.localBDDRunner() }
            else if (bdd_runmode == 'docker') { runnerCommand.dockerBDDRunner() }
            break;
        default: throw new Error("Please select option from ::  api | mocha | cucumber")
    }
}

configRunner()