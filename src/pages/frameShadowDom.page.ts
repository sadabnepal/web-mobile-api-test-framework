import Page from "./page";

class FrameShadowDom extends Page {

    async openApp() {
        await browser.maximizeWindow()
        return super.open('https://selectorshub.com/xpath-practice-page/');
    }

    get snacksFrame() { return $("#pact")}
    get snacksTextbox() { return $("#snacktime") }
    get username() { return $("#userName") }
    get country() { return $("#jex") }

}
export default new FrameShadowDom()