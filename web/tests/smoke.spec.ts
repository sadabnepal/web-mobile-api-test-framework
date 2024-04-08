import loginPage from "../pages/login.page";
import securePage from "../pages/secure.page";
import { herokuAppLoginData } from "../resources/logindata";
import FrameworkConstants from "../static/frameworkConstants";


describe('Login feature', () => {

    it("should validate smoke test", async () => {
        await loginPage.openApp();
        await loginPage.login(herokuAppLoginData.validUserName, herokuAppLoginData.validPassword());
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });

});


