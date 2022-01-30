import webtablesPage from "src/web/pages/webtables.page"
import { PHP_ADMIN_CREDS } from "src/web/resources/logindata";
import { PHP_ADMIN_DATA } from "src/web/resources/webtables";

describe('validate web table elements', () => {

    let vendorTableData: any;

    beforeEach(async () => {
        await webtablesPage.loginToApp(PHP_ADMIN_CREDS.email, PHP_ADMIN_CREDS.password)
    })

    afterEach(async ()=> {
        await webtablesPage.logoutFromApp()
    })

    it('should retrieve order table data', async () => {
        await expect(webtablesPage.dashboardHeader).toHaveText(PHP_ADMIN_DATA.PageHeader)
        expect(await webtablesPage.getAllTitles()).toEqual(PHP_ADMIN_DATA.CardTitleList)

        vendorTableData = await webtablesPage.getTableDataAsListOfMap()
        expect(vendorTableData.length).toBeGreaterThan(0)
    })

    it('should filter order with completion % > than 60', async () => {
        const filteredCompletedOrder = vendorTableData.filter((data: any) => data.completion > "60%")
        console.log(filteredCompletedOrder)

        const isAllFilteredOrderCompleteGreaterThan60 = (data:any) => data.completion > "60%";
        expect(filteredCompletedOrder.every(isAllFilteredOrderCompleteGreaterThan60)).toBeTruthy()
    })

})