<h2 align="center"> Mobile Test Automation Framework | WebdriverIO | Appium </h2>


### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Appium-Inspector](https://img.shields.io/badge/-Appium%20Inspector-662d91?logo=appium&logoColor=black)](https://github.com/appium/appium-inspector/releases)
[![AppiumDriver](https://img.shields.io/badge/-Appium%20Driver-662d91?logo=Appium&logoColor=white)](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli)
[![AndroidStudio](https://img.shields.io/badge/-Android%20Studio-3DDC84?logo=android-studio&logoColor=white)](https://developer.android.com/studio)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started:

#### Clone repository:
```bash
git clone https://github.com/sadabnepal/WebdriverIOAppiumMochaJS.git
Navigate to `WebdriverIOAppiumMochaJS`
```
Note: all npm command should be executed from root project folder.

#### Install dependencies:
```bash
npm install
```

#### Setup/Create virtual device on Android studio:
```
Device 1:
---------
platformName: Android
android verion: 11
deviceName: Pixel 3

Device 2: [ for parallel execution]
---------
platformName: Android
android verion: 10
deviceName: Nexus 6
```

#### Verify appium drivers:
```
npm run list-driver
```
uiautomator2 should be installed for android and xcuitest for ios<br/>
![appium_driver_list.png](sample/appium_driver_list.png)

If drivers are not installed then run below commnad as required:
```
npm run install-driver-android
npm run install-driver-ios
```

#### Verify all pre-requisite for android:
```
npm run android-doctor
```
all options should be green checked as shown in below image to start.
![android_config.png](sample/android_config.png)

### Run Test:
```
npm test
npm run test-parallel
```

### Generate Report:
```
npm run report
```

### Sample Report
![report.png](sample/report.png)
