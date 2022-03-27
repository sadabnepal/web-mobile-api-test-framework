export const emailBodyTemplate = (total: number, passed: number, failed: number, skipped: number) => {
    return `<html>
    <body>
        <table class="container" align="center" style="padding-top:20px">
            <tr align="center">
                <td colspan="4"><h2>Test Automation Report</h2></td>
            </tr>
            <tr>
                <td>
                    <table style="background:#67c2ef;width:120px">
                        <tr><td style="font-size: 36px" class="value" align="center">${total}</td></tr>
                        <tr><td align="center">Total</td></tr>
                    </table>
                </td>
                
                <td>
                    <table style="background:#79c447;width:120px">
                        <tr><td style="font-size: 36px" class="value" align="center">${passed}</td></tr>
                        <tr><td align="center">Passed</td></tr>
                    </table>
                </td>
                <td>
                    <table style="background:#ff5454;width:120px">
                        <tr><td style="font-size: 36px" class="value" align="center">${failed}</td></tr>
                        <tr><td align="center">Failed</td></tr>
                    </table></td>
                <td>
                    <table style="background:#fabb3d;width:120px">
                        <tr><td style="font-size: 36px" class="value" align="center">${skipped}</td></tr>
                        <tr><td align="center">Skipped</td></tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`
}