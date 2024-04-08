import { Given, Then, When } from '@cucumber/cucumber';
import loginPage from '../../../pages/login.page';
import securePage from '../../../pages/secure.page';

Given(/^I am on the login page$/, async () => {
    await loginPage.openApp()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining(message);
});

