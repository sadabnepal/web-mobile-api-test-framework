import { Given, Then, When } from '@cucumber/cucumber';
import loginPage from '../../../pages/login.page';
import securePage from '../../../pages/secure.page';
import FrameworkConstants from '../../../static/frameworkConstants';

Given(/^I open the heroku app login page$/, async () => {
    await loginPage.openApp();
});

When(/^I login with given username and password$/, async (dataTable) => {
    await loginPage.login(dataTable.hashes()[0].username, dataTable.hashes()[0].password)
});

Then(/^I should see a (success|failed) flash message$/, async (status: string) => {
    await expect(securePage.flashAlert).toBeExisting();

    switch (status) {
        case "success": await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_SUCCESS_MSG);
            break;
        case "failed": await expect(securePage.flashAlert).toHaveTextContaining(FrameworkConstants.LOGIN_FAILED_MSG);
            break;
    }
});
