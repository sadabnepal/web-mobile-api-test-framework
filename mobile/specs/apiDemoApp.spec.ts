import PageElement from 'pages/elements.page';
import * as constant from 'static/constants';

describe('API Demo Android APP tests', () => {

    it('should validate app name', async () => {
        await expect(PageElement.appNameHeader).toHaveText(constant.APP_HEADER);
    })

    it('should validate all menu items', async () => {
        const actualMenuItems = await PageElement.allMenuItemsElements.map(async menuItem => menuItem.getText());
        expect(actualMenuItems).toEqual(constant.MENU_ITEMS)
        expect(await PageElement.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('should open Action bar menu item', async () => {
        await PageElement.clickOnAppMenu();
        await expect(PageElement.actionBar).toBeExisting();
    })

    it('should validate command two menu with app activity', async () => {
        await PageElement.navigateToCommandTwoPopup()
        await expect(PageElement.commandTwoMsgElement).toHaveText(constant.COMMAND_TWO_POPUP_MSG);
    })

    it('should validate screen top sendkeys', async () => {
        await PageElement.openCountryInputPage()
        await PageElement.countryInputElement.setValue('Nepal')
        await expect(PageElement.countryInputElement).toHaveText('Nepal')
    })

    it('should validate alert text and accept alert', async () => {
        await PageElement.openAlertPage()
        await PageElement.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toEqual(constant.ALERT_TEXT)
        await driver.acceptAlert()
        await expect(PageElement.alertTitleElement).not.toExist()
    })

    it('should validate alert text and dismiss alert', async () => {
        await PageElement.openAlertPage()
        await PageElement.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toEqual(constant.ALERT_TEXT)
        await driver.dismissAlert()
        await expect(PageElement.alertTitleElement).not.toExist()
    })

    it('should validate vertical scrolling', async () => {
        await PageElement.openMainMenu()
        await PageElement.clickOnAppMenu()
        await PageElement.clickOnActivityMenu()
        await PageElement.scrollAndclickOnWallpaperMenu()
        await expect(PageElement.wallpaperTextElement).toHaveTextContaining(constant.WALLPAPER_TEXT)
    })

    it('should validate horizontal scrolling', async () => {
        await PageElement.openGalleryPage()
        await PageElement.scrollGalleryHorizontally()
    })

    it('should validate next month date selection using scroll', async () => {
        await PageElement.openMainMenu()
        await PageElement.clickOnViewsMenu()
        await PageElement.openDateDialougeMenu()
        const currentDate = await PageElement.dateElement.getText()
        await PageElement.changeDateButton.click()
        await PageElement.scrollToNextMonthAndSelectDay('10')
        const updateDate = await PageElement.dateElement.getText()
        expect(updateDate).not.toEqual(currentDate)
    })

})