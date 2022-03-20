import webtablesPage from "@UIPages/webtables.page";
import { table1DataOptions } from "@UITypes/customTypes";

describe('validate web table elements', () => {

    let example1TableData: any;

    beforeEach(async () => {
        await webtablesPage.openApp()
    })

    it("JIRA-00009:should retrieve example1 table data", async () => {
        await expect(webtablesPage.dashboardHeader).toHaveText("Data Tables")
        example1TableData = await webtablesPage.getTableDataAsListOfMap()
        console.table(example1TableData);
        expect(example1TableData.length).toBeGreaterThan(0)
    })

    it("JIRA-00010:should filter user data with due > $50", async () => {
        const filterDataGreaterThan50 = (data: table1DataOptions) => +(data.Due.split("$")[1]) > 50;
        const filteredUserData = example1TableData.filter(filterDataGreaterThan50)
        console.table(filteredUserData)
        expect(filteredUserData.every(filterDataGreaterThan50)).toBeTruthy()
    })

    it("JIRA-00011:should calculate total due amount", async () => {
        const filterDueAmount = (data: table1DataOptions) => parseFloat(data.Due.split("$")[1]);
        const totalDue = example1TableData.map(filterDueAmount).reduce((pre: number, current: number) => pre + current)
        expect(totalDue).toEqual(251)
    })

    it("JIRA-00012:should add $30 due amout if it is <= $50", async () => {
        const updatedata = example1TableData.splice().map((data: table1DataOptions) => {
            if (Number(data.Due.split("$")[1]) <= 50) {
                data.Due = "$" + (parseFloat(data.Due.split("$")[1]) + 30).toFixed(2)
            }
            return data;
        })
        console.table(updatedata)
        const isAllDueGreaterThan30 = (data: table1DataOptions) => +(data.Due.split("$")[1]) > 30;
        expect(updatedata.every(isAllDueGreaterThan30)).toBeTruthy()
    })


})