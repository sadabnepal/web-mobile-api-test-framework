import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async openApp() {
        await browser.maximizeWindow()
        return super.open('https://the-internet.herokuapp.com/login');
    }
}

export default new LoginPage();
