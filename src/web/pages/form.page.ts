import { FormFieldTypes } from "@UITypes/customTypes"
import Page from "@UIPages/BasePage";

class FormElements extends Page {

    get nameTextBox() { return $('#cname') }
    get emailTextBox() { return $('#cemail') }
    get phoneTextBox() { return $('#cphone') }
    get phoneRadioBtns() { return $$('.radio-container>input') }
    get messageTextBox() { return $('#cmessage') }
    get questionDropdown() { return $('#cselect') }
    get simulateMsgCheckBox() { return $('#csuccess') }
    get submitBtn() { return $('#submit') }
    get submittedMsg() { return $('#cmsgSubmit') }

    async openApp() {
        await super.open("https://aquabottesting.com/")
    }

    async submitContactForm(formdata: FormFieldTypes) {
        await this.scrollToElement(this.nameTextBox)
        await this.enterData(this.nameTextBox, formdata.name)
        await this.enterData(this.emailTextBox, formdata.email)
        await this.enterData(this.phoneTextBox, formdata.contactNo)
        await this.clickOnClassMatchingElement(this.phoneRadioBtns, formdata.contactType)
        if (formdata.message) { await this.enterData(this.messageTextBox, formdata.message) }
        await this.selectDropdownByText(this.questionDropdown, formdata.question)
        await this.clickElement(this.simulateMsgCheckBox)
        await this.clickElement(this.submitBtn)
    }

}
export default new FormElements()