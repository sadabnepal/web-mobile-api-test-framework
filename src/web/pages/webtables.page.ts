import { waitAndclick } from 'src/web/utils/commands';
import Page from "./page";

class WebTablePage extends Page {

    get emailInput() { return $("[name=email]") }
    get passwordInput() { return $("[name=password]") }
    get loginButton() { return $("button[type=submit]") }
    get dashboardHeader() { return $("//h1") }
    get cardTitleElements() { return $$(".card-title") }
    get vendorTable() { return $("#datatablesSimple") }
    get menuProfileBtn() { return $("#dropdownMenuProfile") }
    get logoutBtn() { return $("//a[contains(@href,'logout')]") }

    async openApp() {
        await browser.maximizeWindow()
        return super.open("https://phptravels.net/api/admin")
    }

    async loginToApp(username: string, password: string) {
        await this.openApp()
        await this.emailInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async logoutFromApp() {
        await this.menuProfileBtn.click()
        await waitAndclick(this.logoutBtn)
    }

    async getAllTitles() {
        return await this.cardTitleElements.map(async cardTitle => await cardTitle.getText());
    }

    private setColumnData(cellData: {}, index: number, data: string | undefined) {
        switch (index) {
            case 0: cellData["name"] = data
                break;
            case 1: cellData["ext"] = data
                break;
            case 2: cellData["city"] = data
                break;
            case 3: cellData["startDate"] = data
                break;
            case 4: cellData["completion"] = data
                break;
            default: throw new Error("Only 5 colum is expected in  vendor table !!!")
        }
    }

    async getTableDataAsListOfMap() {
        await this.vendorTable.scrollIntoView()
        let tableRows = this.vendorTable.$$("tbody>tr");
        let tableData: any[] = [];
        for await (let tableRow of await tableRows) {
            const tableCells = tableRow.$$("td");
            const tableCellLength = await tableCells.length
            let cellData = {};
            for (let i = 0; i < tableCellLength; i++) {
                const element = await tableCells[i]?.getText();
                this.setColumnData(cellData, i, element)
            }
            tableData.push(cellData)
        }
        return tableData;
    }


}
export default new WebTablePage()