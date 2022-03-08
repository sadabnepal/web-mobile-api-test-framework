import LoginPage from 'src/web/pages/login.page';
import SecurePage from 'src/web/pages/secure.page';
import { herokuappLoginData } from 'src/web/resources/logindata';
import FrameworkConstants from 'src/web/static/FrameworkConstants';

describe('Test herokuapp application login', () => {

    beforeEach(async () => {
        await LoginPage.openApp();
    })

    it("JIRA-00007:should login with valid credentials", async () => {
        await LoginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword());
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });

    it("JIRA-00008:should not login with invalid credentials", async () => {
        await LoginPage.login(herokuappLoginData.invalidUserName, herokuappLoginData.invalidPassword);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_FAILED_MSG);
    });
    
});


