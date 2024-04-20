import elementsPage from '../pages/elements.page';
import * as constants from '../static/constants';

describe('API Demo Android APP tests', () => {

    it('should validate app name', async () => {
        await expect(elementsPage.appNameHeader).toHaveText(constants.APP_HEADER);
    })

    it('should validate all menu items', async () => {
        const actualMenuItems = await elementsPage.allMenuItemsElements.map(async menuItem => menuItem.getText());
        expect(actualMenuItems).toEqual(constants.MENU_ITEMS)
        expect(await elementsPage.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('should open Action bar menu item', async () => {
        await elementsPage.clickOnAppMenu();
        await expect(elementsPage.actionBar).toBeExisting();
    })

    it('should validate command two menu with app activity', async () => {
        await elementsPage.navigateToCommandTwoPopup()
        await expect(elementsPage.commandTwoMsgElement).toHaveText(constants.COMMAND_TWO_POPUP_MSG);
    })

    it('should validate screen top send keys', async () => {
        await elementsPage.openCountryInputPage()
        await elementsPage.countryInputElement.setValue('Nepal')
        await expect(elementsPage.countryInputElement).toHaveText('Nepal')
    })

    it('should validate alert text and accept alert', async () => {
        await elementsPage.openAlertPage()
        await elementsPage.clickOnOkCancelDialogue()
        expect(await driver.getAlertText()).toEqual(constants.ALERT_TEXT)
        await driver.acceptAlert()
        await expect(elementsPage.alertTitleElement).not.toExist()
    })

    it('should validate alert text and dismiss alert', async () => {
        await elementsPage.openAlertPage()
        await elementsPage.clickOnOkCancelDialogue()
        expect(await driver.getAlertText()).toEqual(constants.ALERT_TEXT)
        await driver.dismissAlert()
        await expect(elementsPage.alertTitleElement).not.toExist()
    })

    it('should validate vertical scrolling', async () => {
        await elementsPage.openMainMenu()
        await elementsPage.clickOnAppMenu()
        await elementsPage.clickOnActivityMenu()
        await elementsPage.scrollAndClickOnWallpaperMenu()
        await expect(elementsPage.wallpaperTextElement).toHaveText(expect.stringContaining(constants.WALLPAPER_TEXT));
    })

    it('should validate horizontal scrolling', async () => {
        await elementsPage.openGalleryPage()
        await elementsPage.scrollGalleryHorizontally()
    })

    it('should validate next month date selection using scroll', async () => {
        await elementsPage.openMainMenu()
        await elementsPage.clickOnViewsMenu()
        await elementsPage.openDateDialogueMenu()
        const currentDate = await elementsPage.dateElement.getText()
        await elementsPage.changeDateButton.click()
        await elementsPage.scrollToNextMonthAndSelectDay('10')
        const updateDate = await elementsPage.dateElement.getText()
        expect(updateDate).not.toEqual(currentDate)
    })

})