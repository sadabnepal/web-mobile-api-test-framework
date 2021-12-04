import frameShadowPage from "src/pages/frameShadowDom.page"

describe('Shadow dom and frame demo', () => {

    beforeEach(async ()=> {
        await frameShadowPage.openApp()
    })

    it('should switch to frame and handle shadow dom element', async () => {
        await browser.switchToFrame(await frameShadowPage.snacksFrame)
        await frameShadowPage.snacksTextbox.shadow$("#tea").setValue('Lemon Tea')
        await browser.pause(2000)
    })

    it('should switch to frame inside shadow dom', async () => {
        const frameElement = await frameShadowPage.username.shadow$("#pact1")
        await browser.switchToFrame(frameElement);
        await frameShadowPage.country.setValue('Nepal');
        await browser.pause(2000)
    })
   
})