import Page from "@UIPages/page";

class SecurePage extends Page {

    get flashAlert() { return $('#flash') }
}

export default new SecurePage();
