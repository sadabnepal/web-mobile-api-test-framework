import BasePage from "./base.page"

class PageElements extends BasePage {
    get appNameHeader() { return $('android.widget.TextView') }
    get allMenuItemsElements() { return $$(".android.widget.TextView") }
    get appMenuElement() { return $('~App') }
    get viewsMenuElement() { return $('~Views') }
    get listDialogueElement() { return $("//*[@content-desc='List dialog']") }
    get commandTwoElement() { return $("//*[@text='Command two']") }
    get commandTwoMsgElement() { return $('//*[@resource-id="android:id/message"]') }
    get okCancelElement() { return $('~OK Cancel dialog with a message') }
    get alertTitleElement() { return $('//*[@resource-id="android:id/alertTitle"]') }
    get actionBar() { return $('~Action Bar') }
    get activitySubMenu() { return $('~Activity') }
    get countryInputElement() { return $('//*[@resource-id="io.appium.android.apis:id/edit"]') }
    get dateWidgetMenu() { return $('~Date Widgets') }
    get dialogOption() { return $('~1. Dialog') }
    get dateElement() { return $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'); }
    get changeDateButton() { return $('~change the date') }
    get dateOKButton() { return $('//android.widget.Button[@text="OK"]') }
    get wallpaperTextElement() { return $('//*[@resource-id="io.appium.android.apis:id/text"]') }

    async openMainMenu() {
        await this.openUsingPackage(".ApiDemos")
    }

    async openAlertPage() {
        await this.openUsingPackage(".app.AlertDialogSamples")
    }

    async openCountryInputPage() {
        await this.openUsingPackage(".view.AutoComplete1")
    }

    async openGalleryPage() {
        await this.openUsingPackage(".view.Gallery1")
    }

    async clickOnAppMenu() {
        await this.appMenuElement.click();
    }

    async clickOnViewsMenu() {
        await this.viewsMenuElement.click()
    }

    async navigateToCommandTwoPopup() {
        await this.openAlertPage()
        await this.listDialogueElement.click();
        await this.commandTwoElement.click();
    }

    async clickOnOkCancelDialogue() {
        await this.okCancelElement.click();
    }

    async clickOnActivityMenu() {
        await this.activitySubMenu.click()
    }

    async selectDay(day: string) {
        await $(`//android.view.View[@text='${day}']`).click()
    }

    async openDateDialogueMenu() {
        await this.dateWidgetMenu.click()
        await this.dialogOption.click()
    }

    async scrollToNextMonthAndSelectDay(day: string) {
        await this.scrollHorizontally()
        await this.selectDay(day)
        await this.dateOKButton.click()
    }

    async scrollGalleryHorizontally() {
        await this.scrollHorizontally()
    }

    async scrollAndClickOnWallpaperMenu() {
        await this.scrollAndClickByText('Wallpaper')
    }


}
export default new PageElements()