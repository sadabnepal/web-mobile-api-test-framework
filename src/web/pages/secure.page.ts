import Page from './page';

class SecurePage extends Page {

    get flashAlert() { return $('#flash') }
}

export default new SecurePage();
