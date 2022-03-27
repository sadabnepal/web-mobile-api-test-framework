import loginPage from "@UIPages/login.page";
import securePage from "@UIPages/secure.page";
import FrameworkConstants from "@UIStatic/FrameworkConstants";
import { herokuappLoginData } from "@UITestData/logindata";

describe('Test herokuapp application login', () => {

    beforeEach(async () => {
        await loginPage.openApp();
    })

    it("JIRA-00007:should login with valid credentials", async () => {
        await loginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword());
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });

    it("JIRA-00008:should not login with invalid credentials", async () => {
        await loginPage.login(herokuappLoginData.invalidUserName, herokuappLoginData.invalidPassword);
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_FAILED_MSG);
    });

});


