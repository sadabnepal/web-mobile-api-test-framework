import { waitAndclick, waitAndEnterData } from 'src/web/utils/commands';
import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    async login(username: string, password: string) {
        await waitAndEnterData(this.inputUsername, username);
        await waitAndEnterData(this.inputPassword, password);
        await waitAndclick(this.btnSubmit);
    }

    async openApp() {
        await browser.maximizeWindow()
        return super.open('https://the-internet.herokuapp.com/login');
    }
}

export default new LoginPage();
