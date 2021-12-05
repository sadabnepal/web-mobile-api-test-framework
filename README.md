<h2 align="center"> Web and API Test Automation Framework </h2>

![WebDriverIO](https://img.shields.io/badge/WebDriverIO-EA5906.svg?&style=for-the-badge&logo=WebdriverIO&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?&style=for-the-badge&logo=Typescript&logoColor=black)
![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?&style=for-the-badge&logo=Mocha&logoColor=white)
![Cucumber](https://img.shields.io/badge/-Cucumber-brightgreen?logo=cucumber&logoColor=white&style=for-the-badge)
![Chai-Assertion](https://img.shields.io/badge/-Chai%20Assertion-900C3F?&style=for-the-badge&logo=Java&logoColor=white)
![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?&style=for-the-badge)
![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?&style=for-the-badge)
![Expect-WebDriverIO](https://img.shields.io/badge/Expect-WebDriverIO-EA5906.svg?&style=for-the-badge&logo=WebdriverIO&logoColor=white)

### Requirements:
-   node >= 12.xx.xx - [Install NodeJs](https://nodejs.org/en/download/)
-   Visual Studio Code - [Click here to download](https://code.visualstudio.com/download)

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
Select framework options from interactive CLI
```
npm start
```
Above command will start wizard with option to select frammework. Based on user selection default configuration will be overriden (feature implementation in progress) and either of the below test module will start. Code to control wizard and user selection is available in 'runner.ts' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
Framework options : | api | mocha | cucumber |
<br>

Default configurations for `mocha` and `cucumber bdd`:
```
Runmode: headless
Service: selenium-standalone
Browser: chrome
Max browser instance: 1
Retry on failure: 0
```

Run mocha tests with default configurations:
```bash
npm test
```
Generate mocha report:
```bash
npm run report:mocha
```
Run cucumber tests with default configurations:
```bash
npm run test:e2e
```
Generate cucumber html:
```bash
npm run report:cucumber
```
Run api tests without using interactive CLI options:
```bash
npm run test:api
```

Report Paths:
```
mocha: mochawesome-report/mochawesome-report.html
cucumber: reports/cucumber/cucumber-report.html
api: reports/api/mochawesome.html
```

### Features Covered:
| Features(inbuilt & custom implemented)| Status    |
| ------------------------------------- | :-------: |
| Retry failed test                     | Enabled   |
| Parallel execution                    | Enabled   |
| Cross browser testing                 | Completed |
| Page Object Design pattern            | Completed |
| Screenshot in report for failed tests | Completed |
| Mocha and Cucumber BDD framework      | Completed |
| Download chromedriver from local path | Completed |
| API Testing using SuperTest           | Completed |
| Set browser configs from command line | WIP       |
| Add more test examples                | WIP       |
| Database connection manager           | TODO      |

### Folder Structure:
```
├───.github
|      └───workflows
|     	      └───nodejs.yml
├───.vscode
|       ├───extensions.json
|       └───settings.json
├───reports
|       └───index.ts
├───src
|   ├──────api
|   │       ├───config
|   │       ├───resources
|   │       ├───services
|   │       ├───test
|   │       └───utils
|   ├───config
|   │  	    ├───BDDCustomConfig.ts
|   │       └───MochaCustomConfig.ts
|   ├───executables
|   │  	    ├───drivers
|   │       └───installchromedriver.bat
|   ├───pages
|   ├───resources
|   │       └───logindata.ts
|   ├───static
|   │       ├───loginConstants.ts
|   │       └───pathConstants.ts
|   ├───tests
|   │  	    ├───cucumber
|   |       |      ├───features
|   │       |      └───steps
|   │       └───mocha
|   ├───types
|   │       └───webelements.d.ts
|   └───Utils
|           ├───base64Utils.ts
|           ├───commands.ts
|           ├───fileutils.ts
|           └───waitUtils.ts
├───.gitignore
├───LICENSE
├───package-lock.json
├───package.json
├───README.md
├───runner.ts
├───tsconfig.json
├───wdio.conf.e2e.ts
└───wdio.conf.ts
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
### Tech Stacks:
 - [WebdriverI/O](https://webdriver.io/) : Next-gen browser and mobile automation test framework for Node.js
 - [TypeScript](https://www.typescriptlang.org/) : Strongly typed programming language that builds on JavaScript.
 - [Cucumber.io](https://cucumber.io/) : Testing framework that supports Behavior Driven Development (BDD).
 - [expect-webdriverio](https://webdriver.io/docs/api/expect-webdriverio/) : WebdriverIO Assertion library inspired by expect
 - [SuperTest](https://www.npmjs.com/package/supertest) : Node package for API testing.
 - [Chai Assertion](https://www.chaijs.com/) : BDD / TDD assertion library for node and the browser.
 - [enquirer](https://www.npmjs.com/package/enquirer) : Stylish CLI prompts that are user-friendly, intuitive and easy to create.

### Sample Report
![SampleReports](https://user-images.githubusercontent.com/65847528/144699948-507b314e-9639-450c-b127-fb9b0721a2d8.gif)