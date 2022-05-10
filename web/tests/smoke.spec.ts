import loginPage from "@UIPages/login.page";
import securePage from "@UIPages/secure.page";
import FrameworkConstants from "@UIStatic/FrameworkConstants";
import { herokuappLoginData } from "@UITestData/logindata";

describe('Login feature', () => {

    it("should validate smoke test", async () => {
        await loginPage.openApp();
        await loginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword());
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });

});


