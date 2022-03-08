import formPage from 'src/web/pages/form.page';
import testdata from 'src/web/resources/testdata.json'
import FrameworkConstants from 'src/web/static/FrameworkConstants';

describe('test form submission and use of interface', () => {

    beforeEach(async () => {
        await formPage.openApp()
    })

    it('should submit form with mandatory fields only', async () => {
        await formPage.submitContactForm(testdata.formDataWithMandateFieldsOnly)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

    it('should submit form with all mandate and non-mandate fields', async () => {
        await formPage.submitContactForm(testdata.formDataWithAllFields)
        await expect(formPage.submittedMsg).toHaveText(FrameworkConstants.FORM_SUBMITTED_MSG)
    });

});