import BasePage from "./basePage";

class FrameShadowDom extends BasePage {

    async openApp() {
        await super.open('https://selectorshub.com/xpath-practice-page/');
    }

    get snacksFrame() { return $("#pact") }
    get snacksShadowDom() { return $("#snacktime") }
    get username() { return $("#userName") }
    get country() { return $("#jex") }
    get teaShadowElement() { return this.snacksShadowDom.shadow$("#tea") }

    async enterSnacks(value: string) {
        await browser.switchToFrame(await this.snacksFrame)
        await this.enterData(this.teaShadowElement, value)
    }

    async enterCountry(value: string) {
        await browser.switchToFrame(await this.username.shadow$("#pact1"));
        await this.enterData(this.country, value);
    }

}
export default new FrameShadowDom()