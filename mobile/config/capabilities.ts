import { ANDROID_APP_PATH } from "../static/pathConstants";

export const androidDeviceCapabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "11",
        "appium:deviceName": "Pixel 3",
        "appium:systemPort": 8200,
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': false,
        'appium:newCommandTimeout': 30,
        "appium:autoGrantPermissions": true,
        "appium:avd": "Pixel_3",
        "appium:avdLaunchTimeout": 180000
    }
]

export const androidMultiDeviceCapabilities = [
    ...androidDeviceCapabilities,
    {
        platformName: "Android",
        "appium:platformVersion": "10",
        "appium:deviceName": "Nexus 6",
        "appium:systemPort": 8201,
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': false,
        'appium:newCommandTimeout': 30,
        "appium:autoGrantPermissions": true,
        "appium:avd": "Pixel_3",
        "appium:avdLaunchTimeout": 180000
    }
]