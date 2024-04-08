import { FormFieldTypes } from "../types/customTypes"
import BasePage from "./basePage"

class FormElements extends BasePage {

    get nameTextBox() { return $('#cname') }
    get emailTextBox() { return $('#cemail') }
    get phoneTextBox() { return $('#cphone') }
    get phoneRadioButtons() { return $$('.radio-container') }
    get messageTextBox() { return $('#cmessage') }
    get questionDropdown() { return $('#cselect') }
    get simulateMsgCheckBox() { return $('#csuccess') }
    get submitBtn() { return $('#submit') }
    get submittedMsg() { return $('#cmsgSubmit') }

    async openApp() {
        await super.open("https://aquabottesting.com/")
    }

    async submitContactForm(formData: FormFieldTypes) {
        await this.scrollToElement(this.nameTextBox)
        await this.enterData(this.nameTextBox, formData.name)
        await this.enterData(this.emailTextBox, formData.email)
        await this.enterData(this.phoneTextBox, formData.contactNo)
        await this.clickOnMatchingText(this.phoneRadioButtons, formData.contactType)
        if (formData.message) { await this.enterData(this.messageTextBox, formData.message) }
        await this.selectDropdownByText(this.questionDropdown, formData.question)
        await this.clickElement(this.simulateMsgCheckBox)
        await this.clickElement(this.submitBtn)
    }

}
export default new FormElements()