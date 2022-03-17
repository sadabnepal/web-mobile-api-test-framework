import { Pages } from '@UIImports/pages';
import { Data, Constants } from '@UIImports/resources';

describe('Test herokuapp application login', () => {

    beforeEach(async () => {
        await Pages.login.openApp();
    })

    it("JIRA-00007:should login with valid credentials", async () => {
        await Pages.login.login(Data.herokuappLoginData.validUserName, Data.herokuappLoginData.validPassword());
        await expect(Pages.secure.flashAlert).toBeExisting();
        await expect(Pages.secure.flashAlert).toHaveTextContaining(Constants.framework.LOGIN_SUCCESS_MSG);
    });

    it("JIRA-00008:should not login with invalid credentials", async () => {
        await Pages.login.login(Data.herokuappLoginData.invalidUserName, Data.herokuappLoginData.invalidPassword);
        await expect(Pages.secure.flashAlert).toBeExisting();
        await expect(Pages.secure.flashAlert).toHaveTextContaining(Constants.framework.LOGIN_FAILED_MSG);
    });
    
});


