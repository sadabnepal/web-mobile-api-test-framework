import loginPage from "../../pages/login.page";
import securePage from "../../pages/secure.page";
import { herokuAppLoginData } from "../../resources/logindata";
import FrameworkConstants from "../../static/frameworkConstants";


describe('Test heroku app application login', () => {

    beforeEach(async () => {
        await loginPage.openApp();
    })

    it("should login with valid credentials", async () => {
        await loginPage.login(herokuAppLoginData.validUserName, herokuAppLoginData.validPassword());
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });

    it("should not login with invalid credentials", async () => {
        await loginPage.login(herokuAppLoginData.invalidUserName, herokuAppLoginData.invalidPassword);
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_FAILED_MSG);
    });

});