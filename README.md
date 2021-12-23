<h2 align="center"> Web and API Test Automation Framework </h2>

<h4 align="center">
    
[![CI](https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptHybrid/actions/workflows/main.yml)

</h4>

![WebDriverIO](https://img.shields.io/badge/WebDriverIO-EA5906.svg?&style=for-the-badge&logo=WebdriverIO&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?&style=for-the-badge&logo=Typescript&logoColor=black)
![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?&style=for-the-badge&logo=Mocha&logoColor=white)
![Cucumber](https://img.shields.io/badge/-Cucumber-brightgreen?logo=cucumber&logoColor=white&style=for-the-badge)
![Chai](https://img.shields.io/badge/-Chai-900C3F?&style=for-the-badge&logo=Java&logoColor=white)
![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?&style=for-the-badge)
![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-0db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white)

### Requirements:
![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20>-%23339933?logo=npm) - [Install NodeJs](https://nodejs.org/en/download/) <br>
![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code) - [Install VSCode](https://code.visualstudio.com/download) <br>
![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white) - [Install Docker](https://docs.docker.com/engine/install/)

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
Above command will start wizard with option to select frammework. Based on user selection default configuration will be overriden (feature implementation in progress) and either of the below test module will start. Code to control wizard and user selection is available in 'runner.ts' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
Framework options : | api | mocha | cucumber | <br>
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
Service: selenium-standalone
Browser: Chrome & Edge
Max browser instance: 5
Retry on failure: 1
```

#### Run in local
```bash
npm test          [ Mocha tests ]
npm run test:e2e  [ Cucumber BDD tests ]
npm run test:api  [ Api tests ]
```

#### Run in Docker:
```
docker-compose up -d      [ Create and start containers in detached mode ]
npm run test:docker       [ Mocha tests]
npm run test:e2e:docker   [ Cucumber BDD tests ]
docker-compose down       [ Stop and remove containers ]
```

#### Generate Report:
```
npm run report:mocha     [ generate mocha report ]
npm run report:cucumber  [ generate report ]
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

### Folder Structure:
```
├───.github
├───.vscode
├───reports
├───src
|   ├───api (api test and configs)
|   ├───config (ui test cconfigs)
|   ├───executables
|   ├───pages
|   ├───resources
|   ├───static
|   ├───tests
|   │  	    ├───cucumber
|   │       └───mocha
|   ├───types
|   │       └───webelements.d.ts
|   └───Utils
|           ├───base64Utils.ts
|           ├───commands.ts
|           ├───fileutils.ts
|           └───waitUtils.ts
├───.gitignore
├───docker-compose.yml
├───LICENSE
├───package-lock.json
├───package.json
├───README.md
├───runner.ts
├───tsconfig.json
├───wdio.conf.docker.ts
├───wdio.conf.e2e.docker.ts
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
