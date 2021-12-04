<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="100">
    </a>
</p>

<h2 align="center"> Test Automation Framework </h2>
This framework is using WebdriverI/O as testing tool, TypeScript as programming language, Cucumber and Mocha as Framework

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

Run mocha tests:
```bash
npm test
```
Generate mocha report (for mocha):
```bash
npm run report:mocha
```

Run cucumber tests:
```bash
npm run test:e2e
```
Generate cucumber html (for cucumber bdd):
```bash
npm run report:cucumber
```
Run api tests:
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
| Feature                               | Status    |
| ------------------------------------- | :-------: |
| Retry failed test                     | Completed |
| Parallel execution                    | Completed |
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
|   │  	    ├───login.page.ts
|   │	    ├───page.ts
|   │	    └───secure.page.ts
|   ├───resources
|   │       └───logindata.ts
|   ├───static
|   │       ├───loginConstants.ts
|   │       └───pathConstants.ts
|   ├───tests
|   │  	    ├───cucumber
|   |       |      ├───features
|   │       │      │      └───HerokuAppLogin.feature
|   │       |      └───steps
|   │       │             └───HerokuAppLogin.steps.ts
|   │       └───mocha
|   │              ├───FrameShadowDom.specs.ts
|   │              └───HerokuAppLogin.spec.ts
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

### Sample Report
![SampleReports](https://user-images.githubusercontent.com/65847528/144699948-507b314e-9639-450c-b127-fb9b0721a2d8.gif)