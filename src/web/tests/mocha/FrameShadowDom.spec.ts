import { Pages } from 'src/web/imports/pages';
import { Data } from 'src/web/imports/resources';

describe('Shadow dom and frame demo', () => {

    beforeEach(async () => {
        await Pages.frame.openApp()
    })

    it("JIRA-00005:should switch to frame and handle shadow dom element", async () => {
        await browser.switchToFrame(await Pages.frame.snacksFrame)
        const shadowTeaElement = Pages.frame.snacksShadowDom.shadow$("#tea")
        await shadowTeaElement.setValue(Data.json.shadowDomData.tea)
        await expect(shadowTeaElement).toHaveValue(Data.json.shadowDomData.tea)
    })

    it("JIRA-00006:should switch to frame inside shadow dom", async () => {
        const frameElement = await Pages.frame.username.shadow$("#pact1")
        await browser.switchToFrame(frameElement);
        await Pages.frame.country.setValue(Data.json.shadowDomData.country);
        await expect(Pages.frame.country).toHaveValue(Data.json.shadowDomData.country)
    })

})