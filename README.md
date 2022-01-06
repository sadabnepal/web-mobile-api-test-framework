<h2 align="center"> Web and API Test Automation Framework </h2>

<h4 align="center">

[![CI](https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid/actions/workflows/nodejs.yml)
</h4>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid.git
2. Navigate to `WebdriverIOTypeScriptHybrid`
```

Install the dependencies:
```bash
npm install
```
### Running Tests

#### User interactive CLI
```
npm start
```
Above command will start wizard with option to select frammework. Based on user selection either of the below test module will start in <b>local machine</b> or <b>docker container</b>. Code to control wizard and user selection is available in 'runner.ts' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
<b>Framework options : </b> | api | mocha | cucumber | <br>
![CLI_DEMO](https://user-images.githubusercontent.com/65847528/144734571-7e1d6433-ef4c-456d-87a0-5e7bad812829.gif)

Default configurations for `mocha` and `cucumber bdd`:
```
Runmode: headless
Service: selenium-standalone
Browser: chrome
Max browser instance: 1
Retry on failure: 0
```

Default configurations of docker container for `mocha` and `cucumber bdd`:
```
Runmode: headless
Service: [ docker, selenium-standalone ]
Browser: Chrome, Edge & Firefox
Max browser instance: 5
Retry on failure: 1
```

#### Run in local
```bash
npm test          [ Mocha tests ]
npm run test:e2e  [ Cucumber BDD tests ]
npm run test:api  [ Api tests ]
```

#### Run in Docker
```
docker-compose up -d      [ Create and start containers in detached mode ]
npm run test:docker       [ Mocha tests]
npm run test:e2e:docker   [ Cucumber BDD tests ]
docker-compose down       [ Stop and remove containers ]
```

#### Generate Report
```
npm run report:mocha
npm run report:cucumber
```

Report Paths:
```
mocha: mochawesome-report/mochawesome-report.html
cucumber: reports/cucumber/cucumber-report.html
api: reports/api/mochawesome.html
```

### Features:
    - Mocha and Cucumber BDD framework
    - Page Object Design pattern
    - API Testing using SuperTest
    - Docker integration
    - Parallel execution
    - Cross browser testing
    - Retry failed test
    - Screenshot in report for failed tests
    - Download chromedriver from local path
    - Github actions (run tests on Pull Request)

### Tech stacks:
[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-900C3F?logoColor=white)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://www.docker.com/)

### Folder Structure:
```
├───.github
├───.vscode
├───src
|   ├───api (api test and configs)
|   ├───config (wdio config files)
|   ├───executables
|   ├───pages
|   ├───resources
|   ├───static
|   ├───tests
|   │  	    ├───cucumber
|   │       └───mocha
|   ├───types
|   └───Utils
├───.gitignore
├───docker-compose.yml
├───LICENSE
├───package-lock.json
├───package.json
├───README.md
├───runner.ts
└───tsconfig.json
```

### Manage browser driver:
Usually inside corporate network exe files download from external sites are blocked.
When we try to download the drivers it might fail, in that case we can maintain drivers
locally and install as custom path.
```bash
Download the latest driver from 'https://chromedriver.chromium.org/downloads'
Place the the 'chromedriver_win32.zip' file inside src/executables/drivers 
execute 'installchromedriver.bat' file to dowload the driver from placed folder
```

### Sample Report
![SampleReports](https://user-images.githubusercontent.com/65847528/144699948-507b314e-9639-450c-b127-fb9b0721a2d8.gif)
