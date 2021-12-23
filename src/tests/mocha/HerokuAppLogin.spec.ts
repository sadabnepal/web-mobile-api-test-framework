import LoginPage from 'src/pages/login.page';
import SecurePage from 'src/pages/secure.page';
import { herokuappLoginData } from 'src/resources/logindata';
import LoginConstants from 'src/static/loginConstants';

describe('Test herokuapp application login', () => {

    beforeEach(async () => {
        await LoginPage.openApp();
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword());
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('should not login with invalid credentials', async () => {
        await LoginPage.login(herokuappLoginData.invalidUserName, herokuappLoginData.invalidPassword);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
    
});


