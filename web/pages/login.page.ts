import BasePage from "./basePage";

class LoginPage extends BasePage {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    async login(username: string, password: string) {
        await this.waitAndEnterData(this.inputUsername, username);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndClick(this.btnSubmit);
    }

    async openApp() {
        await super.open('https://the-internet.herokuapp.com/login');
    }
}

export default new LoginPage();
