import loginPage from "../pages/login.page";
import securePage from "../pages/secure.page";
import { herokuAppLoginData } from "../resources/logindata";
import FrameworkConstants from "../static/frameworkConstants";

describe('@smoke suite', () => {

    it("should validate login page", async () => {
        await loginPage.openApp();
        await loginPage.login(herokuAppLoginData.validUserName, herokuAppLoginData.validPassword());
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveText(expect.stringContaining(FrameworkConstants.LOGIN_SUCCESS_MSG))
    });

});


