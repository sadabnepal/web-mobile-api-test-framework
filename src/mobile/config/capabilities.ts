import { ANDROID_APP_PATH } from "../test/static/pathconstants";

export const androidDeviceCapabalities = [
    {
        platformName: "Android",
        "appium:platformVersion": "11",
        "appium:deviceName": "Pixel 3",
        "appium:systemPort": "8200",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 30,
        "appium:autoGrantPermissions": true
    }
]

export const androidMultiDeviceCapabalities = [
    ...androidDeviceCapabalities,
    {
        platformName: "Android",
        "appium:platformVersion": "10",
        "appium:deviceName": "Nexus 6",
        "appium:systemPort": "8201",
        "appium:automationName": "UiAutomator2",
        "appium:app": ANDROID_APP_PATH,
        'appium:noReset': true,
        'appium:newCommandTimeout': 30,
        "appium:autoGrantPermissions": true
    }
]