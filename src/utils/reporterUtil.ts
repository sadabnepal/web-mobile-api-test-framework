import allure from '@wdio/allure-reporter'

export const addLog = (step: string) => {
  allure.addStep(step)
  console.log('STEP', step)
}

export const attachScreenshot = (message: string, screenshot: string) => {
  console.log('screenshot: ', screenshot)
  allure.addAttachment(message, Buffer.from(screenshot, 'base64'), 'image/png')
}