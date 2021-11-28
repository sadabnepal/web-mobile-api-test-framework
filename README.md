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

Report Paths:
```
mocha: mochawesome-report/mochawesome-report.html
cucumber: reports/cucumber/cucumber-report.html
```

### Key Features:
	- WebdriverIO (v7 async)
	- TypeScript
	- Retry failed test
	- Parallel execution
	- Cross browser testing
	- Page Object Design pattern
	- Mocha and Cucumber BDD framework
	- Mochawesome and Cucumber HTML Report
	- Screenshot in report for failed tests
    - Download chromedriver from local path (if needed)
	- Set Browser config, Instance, Services from command line 

### Folder Structure:
```
├───.github
|      └───workflows
|     	      └───nodejs.yml
├───.vscode
|       ├───extensions.json
|       └───settings.json
├───reports
|       └───index.js
├───src
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
|   ├───static
|   │       └───loginConstants.ts
|   ├───tests
|   │  	    ├───cucumber
|   |       |      ├───features
|   │       │      │      └───HerokuAppLogin.feature
|   │       |      └───steps
|   │       │             └───HerokuAppLogin.steps.ts
|   │       └───mocha
|   │              └───HerokuAppLogin.spec.ts
|   ├───types
|   │       └───customElement.d.ts
|   └───Utils
|           ├───commands.ts
|           └───waitUtils.ts
├───.gitignore
├───LICENSE
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.json
├───wdio.conf.e2e.ts
└───wdio.conf.js
```

### Manager browser driver:
Usually inside corporate network exe files download from external sites are blocked.
When we try to download the drivers it might fail, in that case we can maintain drivers
locally and install as custom path.
```bash
Download the latest driver from 'https://chromedriver.chromium.org/downloads'
Place the the 'chromedriver_win32.zip' file inside src/executables/drivers 
execute 'installchromedriver.bat' file to dowload the driver from placed folder
```
