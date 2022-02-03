<h2 align="center"> Web, API and Mobile Test Automation Framework </h2>

<h4 align="center">

[![CI](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptE2E/actions/workflows/nodejs.yml)
</h4>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)
[![Appium-Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)
[![AndroidStudio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)

### Getting Started:
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptE2E.git
2. Navigate to `WebdriverIOTypeScriptE2E`
```

Install the dependencies:
```bash
npm install
```

### Appium setup
[Click here to open Appium SetUp README](/src/mobile/README.md)

### Running Tests

#### User interactive CLI
```
npm start
```
Above command will start wizard with option to select frammework. Based on user selection either of the below test module will start in <b>local machine</b> or <b>docker container</b>. Code to control wizard and user selection is available in 'runner.ts' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
<b>Test Module Options : </b> | api | mobile | mocha | cucumber | <br>
![cli_demo](https://user-images.githubusercontent.com/65847528/152398324-b0e44fd0-acdf-4f5e-b762-acb53a9f361c.gif)

Configurations for local run:
```
Runmode: headless
Service: selenium-standalone
Browser: chrome
Max browser instance: 1
Retry on failure: 0
```

Configurations for docker run:
```
Runmode: headless
Service: [ docker ]
Browser: Chrome, Edge & Firefox
Max browser instance: 5
Retry on failure: 1
```

#### Run in local
```bash
npm test             [ Mocha tests ]
npm run test:e2e     [ Cucumber BDD tests ]
npm run test:api     [ Api tests ]
npm run test-mobile  [ Mobile tests ]
```
Note: Make sure android virtual device is up and running before starting mobile test. 

#### Run in Docker  [ only UI tests ]
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
npm run report-mobile
```

Report Paths:
```
mocha: mochawesome-report/mochawesome-report.html
cucumber: reports/cucumber/cucumber-report.html
api: reports/api/mochawesome.html
mobile: reports/mobile/mobile.html
```

#### Send Report
```
update .env file with Sender email, password and recipients email list
npm run mailCucumberReport
```

### Features:
    - Web, Mobile and API Testing
    - Mocha and Cucumber BDD framework
    - Page Object Design pattern
    - Docker integration
    - Parallel execution
    - Cross browser testing
    - Retry failed test
    - Screenshot in report for failed tests
    - Download chromedriver from local path
    - Github actions
    - Send test report to list of Gmail

### Tech stacks:
[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://www.docker.com/)
[![Appium](https://img.shields.io/badge/-Appium-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium)
[![Node-Mailer](https://img.shields.io/badge/-Node%20Mailer-89D05C?logo=gmail&logoColor=blue)](https://github.com/nodemailer/nodemailer)

### Folder Structure:
```
├───.github
├───.vscode
├───src
|   ├───api (api test and configs)
|   ├───mobile (mobiel test and configs)
|   └───web
|       ├───config (wdio config files)
|       ├───executables
|       ├───generator
|       ├───pages
|       ├───resources
|       ├───static
|       ├───tests
|       │     ├───cucumber
|       │     └───mocha
|       ├───types
|       └───Utils
|   
├───.env
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
