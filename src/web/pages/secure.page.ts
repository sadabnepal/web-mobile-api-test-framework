import Page from "@UIPages/BasePage";

class SecurePage extends Page {

    get flashAlert() { return $('#flash') }
}

export default new SecurePage();
