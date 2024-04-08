import formPage from "../../pages/form.page";
import loginData from "../../resources/testdata.json";
import FrameworkConstants from "../../static/frameworkConstants";

describe('test form submission and use of interface', () => {

    beforeEach(async () => {
        await formPage.openApp()
    })

    it('should submit form with mandatory fields only', async () => {
        await formPage.submitContactForm(loginData.formDataWithMandateFieldsOnly)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

    it('should submit form with all mandate and non-mandate fields', async () => {
        await formPage.submitContactForm(loginData.formDataWithAllFields)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

});