import nodemailer from "nodemailer";
import { zipFolder } from "./fileutils";
import { MAILER_PATH } from "../static/pathConstants";
import { env_name, env_password, env_reciever_list, env_sender } from "./envreader";

const EMAIL_BODY = `<html>
<body>
    <table class="container" align="center" style="padding-top:20px">
        <tr align="center">
            <td colspan="4"><h2>Test Automation Report</h2></td>
        </tr>
        <tr>
            <td>
                <table style="background:#67c2ef;width:120px">
                    <tr><td style="font-size: 36px" class="value" align="center">15</td></tr>
                    <tr><td align="center">Total</td></tr>
                </table>
            </td>
            
            <td>
                <table style="background:#79c447;width:120px">
                    <tr><td style="font-size: 36px" class="value" align="center">9</td></tr>
                    <tr><td align="center">Passed</td></tr>
                </table>
            </td>
            <td>
                <table style="background:#ff5454;width:120px">
                    <tr><td style="font-size: 36px" class="value" align="center">3</td></tr>
                    <tr><td align="center">Failed</td></tr>
                </table></td>
            <td>
                <table style="background:#fabb3d;width:120px">
                    <tr><td style="font-size: 36px" class="value" align="center">3</td></tr>
                    <tr><td align="center">Skipped</td></tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`

export const mailSender = async () => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: env_sender,
            pass: env_password,
        },
    });

    let mailOptions = {
        from: `"${env_name}" <${env_sender}>`,
        to: env_reciever_list,
        subject: "Automtion Execution Report",
        html: EMAIL_BODY,
        attachments: [
            {
                filename: 'cucumber-report.zip',
                path: MAILER_PATH.DESTINATION_CUCUMBER_COMPRESS
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email did not deliver' + error)
        } else {
            console.log('Email Sent ' + info.response)
        }
    })
}

zipFolder(MAILER_PATH.SOURCE_CUCUMBER_HTML, MAILER_PATH.DESTINATION_CUCUMBER_COMPRESS)
mailSender()