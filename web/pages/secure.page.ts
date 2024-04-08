import BasePage from "./basePage";

class SecurePage extends BasePage {

    get flashAlert() { return $('#flash') }
}

export default new SecurePage();
