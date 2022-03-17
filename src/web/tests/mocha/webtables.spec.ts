import { Pages } from '@UIImports/pages';

describe('validate web table elements', () => {

    let example1TableData: any;

    beforeEach(async () => {
        await Pages.webtables.openApp()
    })

    it("JIRA-00009:should retrieve example1 table data", async () => {
        await expect(Pages.webtables.dashboardHeader).toHaveText("Data Tables")
        example1TableData = await Pages.webtables.getTableDataAsListOfMap()
        expect(example1TableData.length).toBeGreaterThan(0)
    })

    it("JIRA-00010:should filter user data with due > $50", async () => {
        const filterDataGreaterThan50 = (data: any) => +(data.Due.split("$")[1]) > 50;
        const filteredUserData = example1TableData.filter(filterDataGreaterThan50)
        console.table(filteredUserData)
        expect(filteredUserData.every(filterDataGreaterThan50)).toBeTruthy()
    })

})