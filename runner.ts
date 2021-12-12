import { execSync } from 'child_process'

const { prompt, Select, NumberPrompt, MultiSelect, List, Confirm } = require('enquirer');

const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['api', 'mocha', 'cucumber']
})

const configRunner = async () => {
    let answers = await TEST_MODULE.run();
    switch (answers) {
        case "api": execSync('npm run test:api', { stdio: 'inherit' })
            break;
        case "mocha": execSync('npm run test', { stdio: 'inherit' })
            break;
        case "cucumber": execSync('npm run test:e2e', { stdio: 'inherit' })
            break;
        default: throw new Error("Please select option from ::  api | mocha | cucumber")
    }
}

configRunner()