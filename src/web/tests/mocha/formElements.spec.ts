import { Pages } from 'src/web/imports/pages';
import { Data, Constants } from 'src/web/imports/resources';

describe('test form submission and use of interface', () => {

    beforeEach(async () => {
        await Pages.form.openApp()
    })

    it('should submit form with mandatory fields only', async () => {
        await Pages.form.submitContactForm(Data.json.formDataWithMandateFieldsOnly)
        await expect(Pages.form.submittedMsg).toHaveText(Constants.framework.FORM_SUBMITTED_MSG)
    });

    it('should submit form with all mandate and non-mandate fields', async () => {
        await Pages.form.submitContactForm(Data.json.formDataWithAllFields)
        await expect(Pages.form.submittedMsg).toHaveText(Constants.framework.FORM_SUBMITTED_MSG)
    });

});