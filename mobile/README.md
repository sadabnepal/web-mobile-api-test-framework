#### Install Appium Server
```
npm install -g appium               [ install appium CLI version ]
npm install -g appium-doctor        [ install appium doctor ]
appium --version                    [ To check appium version ]
```

#### Verify drivers
```
appium driver list                  [ To check available drivers ]
appium driver install uiautomator2  [ install android driver]
appium driver install xcuitest      [ install ios driver]
```

#### Setup Android SDK path environment variable
```
- ANDROID_HOME = <path to Sdk folder>
- %ANDROID_HOME%\tools [path variable]
- %ANDROID_HOME%\tools\bin  [path variable]
- %ANDROID_HOME%\platform-tools  [path variable]
```

#### Setup/Create virtual device on Android studio:
```
1] Open Android Studio
2] Click on More Actions 
   --> AVD Manager 
   --> Create Virtual Device 
   --> Select the device and OS version [ Refer Device Configurations ] 
   --> Finish
3] Once Virtual device is created, click on Launch this AVD in the emulator.
4] Command to view the list of devices attached `adb devices`
```

Device Configurations:
```
Device 1: Pixel 3 - version 11
Device 2: Nexus 6 - version 10 [ if you want to run tests in parallel ] 
```


#### Verify all setup
```
appium-doctor --android        [ To check Android set up ]
appium-doctor --ios            [ To check ios set up ]
```
all options should be green checked as shown in below image to start.
![android_config.png](sample/android_config.png)

[Go Back to main README](../../README.md)
