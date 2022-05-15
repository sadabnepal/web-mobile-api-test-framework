import Page from "@UIPages/BasePage";

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    async login(username: string, password: string) {
        await this.waitAndEnterData(this.inputUsername, username);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndclick(this.btnSubmit);
    }

    async openApp() {
        await super.open('https://the-internet.herokuapp.com/login');
    }
}

export default new LoginPage();
