import frameShadowDomPage from "../../pages/frameShadowDom.page";
import loginData from "../../resources/testdata.json";

describe('Shadow dom and frame demo', () => {

    beforeEach(async () => {
        await frameShadowDomPage.openApp()
    })

    it("should switch to frame and handle shadow dom element", async () => {
        await frameShadowDomPage.enterSnacks(loginData.shadowDomData.tea)
        await expect(frameShadowDomPage.teaShadowElement).toHaveValue(loginData.shadowDomData.tea)
    })

    it("should switch to frame inside shadow dom", async () => {
        await frameShadowDomPage.enterCountry(loginData.shadowDomData.country);
        await expect(frameShadowDomPage.country).toHaveValue(loginData.shadowDomData.country)
    })

})
