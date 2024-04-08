import webTablesPage from "../../pages/webTables.page";
import { table1DataOptions } from "../../types/customTypes";

describe('validate web table elements', () => {

    let example1TableData: any;

    beforeEach(async () => {
        await webTablesPage.openApp()
    })

    it("should retrieve example1 table data", async () => {
        await expect(webTablesPage.dashboardHeader).toHaveText("Data Tables")
        example1TableData = await webTablesPage.getTableDataAsListOfMap()
        console.table(example1TableData);
        expect(example1TableData.length).toBeGreaterThan(0)
    })

    it("should filter user data with due > $50", async () => {
        const filterDataGreaterThan50 = (data: table1DataOptions) => +(data.Due.split("$")[1]) > 50;
        const filteredUserData = example1TableData.filter(filterDataGreaterThan50)
        console.table(filteredUserData)
        expect(filteredUserData.every(filterDataGreaterThan50)).toBeTruthy()
    })

    it("should calculate total due amount", async () => {
        const filterDueAmount = (data: table1DataOptions) => parseFloat(data.Due.split("$")[1]);
        const totalDue = example1TableData.map(filterDueAmount).reduce((pre: number, current: number) => pre + current)
        expect(totalDue).toEqual(251)
    })

    it("should add $30 due amount if it is <= $50", async () => {
        const updateData = example1TableData.map((data: table1DataOptions) => {
            if (Number(data.Due.split("$")[1]) <= 50) {
                data.Due = "$" + (parseFloat(data.Due.split("$")[1]) + 30).toFixed(2)
            }
            return data;
        })
        console.table(updateData)
        const isAllDueGreaterThan30 = (data: table1DataOptions) => +(data.Due.split("$")[1]) > 30;
        expect(updateData.every(isAllDueGreaterThan30)).toBeTruthy()
    })

})