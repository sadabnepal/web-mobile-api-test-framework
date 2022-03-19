import frameShadowDomPage from "@UIPages/frameShadowDom.page"
import jsondata from "@UIResources/testdata.json"

describe('Shadow dom and frame demo', () => {

    beforeEach(async () => {
        await frameShadowDomPage.openApp()
    })

    it("JIRA-00005:should switch to frame and handle shadow dom element", async () => {
        await frameShadowDomPage.enterSnacks(jsondata.shadowDomData.tea)
        await expect(frameShadowDomPage.teaShadowElement).toHaveValue(jsondata.shadowDomData.tea)
    })

    it.only("JIRA-00006:should switch to frame inside shadow dom", async () => {
        await frameShadowDomPage.enterCountry(jsondata.shadowDomData.country);
        await expect(frameShadowDomPage.country).toHaveValue(jsondata.shadowDomData.country)
    })

})