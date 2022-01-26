import nodemailer from "nodemailer";
import nodeHtmlToImage from 'node-html-to-image'
import { zipFolder, readFile } from "./fileutils";
import { MAILER_PATH } from "../static/pathConstants";
import { config } from 'dotenv'
config()

const SAMPLE_REPORT_CID = "cucumber-report"
const EMAIL_BODY = `<p>Dear Tester, <br><br>
Test Automation run has been completed.<br> <br>
<b>Detailed HTML Report:</b> Please find in attachement <br><br>
<b>Test Summary Snapshot: </b><br>
<img style="width:500px; width:800px;"src="cid:${SAMPLE_REPORT_CID}" /> <br>

Regards, <br>
<b>Test Automation Hub</b></p>`

export const mailSender = async () => {

    await nodeHtmlToImage({
        output: MAILER_PATH.PNG_REPORT,
        html: readFile(MAILER_PATH.SOURCE_CUCUMBER_HTML).toString()
    }).then(() => console.log('Convereted HTML report to PNG !!'))

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_GMAIL,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: `"${process.env.SENDER_DISPLAY_NAME}" <${process.env.SENDER_GMAIL}>`,
        to: process.env.Reciever_Mail_List,
        subject: "Automtion Execution Report",
        html: EMAIL_BODY,
        attachments: [
            {
                filename: 'cucumber-report.zip',
                path: MAILER_PATH.DESTINATION_CUCUMBER_COMPRESS
            },
            {
                filename: 'cucumber-report.png',
                path: MAILER_PATH.PNG_REPORT,
                cid: SAMPLE_REPORT_CID
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