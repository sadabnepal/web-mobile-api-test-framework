import LoginPage from '../../pages/login.page';
import SecurePage from '../../pages/secure.page';
import LoginConstants from '../../static/loginConstants';

describe('Test herokuapp application login', () => {

    beforeEach(async () => {
        await LoginPage.openApp();
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('should not login with invalid credentials', async () => {
        await LoginPage.login('foo', 'baar');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
    
});


