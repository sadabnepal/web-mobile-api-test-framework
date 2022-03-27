import formPage from "@UIPages/form.page";
import jsondata from "@UIResources/testdata.json";
import FrameworkConstants from "@UIStatic/FrameworkConstants";

describe('test form submission and use of interface', () => {

    beforeEach(async () => {
        await formPage.openApp()
    })

    it('should submit form with mandatory fields only', async () => {
        await formPage.submitContactForm(jsondata.formDataWithMandateFieldsOnly)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

    it('should submit form with all mandate and non-mandate fields', async () => {
        await formPage.submitContactForm(jsondata.formDataWithAllFields)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

});