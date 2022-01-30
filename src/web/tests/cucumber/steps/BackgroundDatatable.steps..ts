import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from 'src/web/pages/login.page';
import securePage from 'src/web/pages/secure.page';
import LoginConstants from 'src/web/static/loginConstants';

Given(/^I open the herokuapp login page$/, async () => {
    await loginPage.openApp();
});

When(/^I login with given username and password$/, async (dataTable) => {
    await loginPage.login(dataTable.hashes()[0].username, dataTable.hashes()[0].password)
});

Then(/^I should see a (success|failed) flash message$/, async (status: string) => {
    await expect(securePage.flashAlert).toBeExisting();

    switch (status) {
        case "success": await expect(securePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
            break;
        case "failed": await expect(securePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
            break;
    }
});
