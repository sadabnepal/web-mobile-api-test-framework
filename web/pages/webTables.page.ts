import BasePage from "./basePage"

class WebTablePage extends BasePage {

    get dashboardHeader() { return $("<h3>") }
    get exampleTable1() { return $("#table1") }

    async openApp() {
        await super.open("https://the-internet.herokuapp.com/tables")
    }

    private setColumnData(personObject: any, index: number, value: string) {
        if (index === 0) personObject["LastName"] = value
        if (index === 1) personObject["FirstName"] = value
        if (index === 2) personObject["Email"] = value
        if (index === 3) personObject["Due"] = value
        if (index === 4) personObject["Website"] = value
        if (index === 5) personObject["Action"] = value
    }

    async getTableDataAsListOfMap() {
        await this.exampleTable1.scrollIntoView()
        let rowCount = (await this.exampleTable1.$$("tbody>tr")).length;
        let columnCount = (await this.exampleTable1.$$("thead>tr>th")).length;

        let personDetails: any[] = [];

        for (let i = 0; i < rowCount; i++) {
            let personObject = {};
            for (let j = 0; j < columnCount; j++) {
                let cellValue = await this.exampleTable1.$(`tbody>tr:nth-child(${i + 1})>td:nth-child(${j + 1})`).getText()
                this.setColumnData(personObject, j, cellValue)
            }
            personDetails.push(personObject) //push table cell as oject to array
        }
        return personDetails;
    }


}
export default new WebTablePage()