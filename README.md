<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="100">
    </a>
</p>

<h2 align="center"> UIAutomation Hybrid Framework </h2>
This framework is using WebdriverI/O as testing tool, TypeScript as programming language, Cucumber and Mocha as Framework

### Requirements
-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid.git
2. Navigate to `WebdriverIOTypeScriptHybrid`
```

Install the dependencies:
```bash
npm install
```

Run tests:
```bash
mocha test: npm test
BDD test: npm run test-e2e
```

Generate report:
```bash
allure report: npm run report
mochawesome: npm run mochawesome
```

### Folder Structure
```
├───src
|   ├───constants
|   │       └───accounts.ts
│   ├───enums
|   │       └───WaitEnums.ts
|   ├───features
|   │       └───TC01_CreateAccount.feature
|   │      
|   ├───pages
|   │  	    ├───AuthenticationPahe.ts
|   │	    ├───BasePage.ts
|   │	    ├───createAccountPage.ts
|   │	    └───homepage.ts
|   ├───stepdef
|   │       └───TC01_CreateAccount.spec.feature
|   │      
|   └───testdata
|           └───SignUp.json
├───Utils
|       ├───Utilities.ts
|       └───WaitUtils.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.js
```

### Inside Corporate network If fails to download driver files then:
```bash
Download the latest driver from `https://chromedriver.chromium.org/downloads`
Delete the existing `chromedriver_win32.zip` file and add newly downloaded zip file 
Run `installchromedriver.bat` command from cmd or double click on bat file
It will download the driver from `drivers-->chromedriver_win32.zip`

```
