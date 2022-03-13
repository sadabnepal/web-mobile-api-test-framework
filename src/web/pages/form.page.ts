import { FormFieldTypes } from "../types/FormFieldTypes"
import { clickElement, clickOnClassMatchingElement, enterData, scrollToElement, selectDropdownByText } from "../utils/commands"
import Page from "./page"

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
        await browser.maximizeWindow();
    }

    async submitContactForm(formdata: FormFieldTypes) {
        await scrollToElement(this.nameTextBox)
        await enterData(this.nameTextBox, formdata.name)
        await enterData(this.emailTextBox, formdata.email)
        await enterData(this.phoneTextBox, formdata.contactNo)
        await clickOnClassMatchingElement(this.phoneRadioBtns, formdata.contactType)
        if (formdata.message) { await enterData(this.messageTextBox, formdata.message) }
        await selectDropdownByText(this.questionDropdown, formdata.question)
        await clickElement(this.simulateMsgCheckBox)
        await clickElement(this.submitBtn)
    }

}
export default new FormElements()