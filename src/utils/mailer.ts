import nodemailer from "nodemailer";
import nodeHtmlToImage from 'node-html-to-image'
import { zipFolder } from "./fileutils";
import { config } from 'dotenv'
import path from 'path';
import fs from 'fs'
config()


const SOURCE_CUCUMBER_HTML_PATH = path.join(process.cwd(), 'reports', 'cucumber', 'cucumber-report.html');
const DESTINATION_CUCUMBER_COMPRESS_PATH = path.join(process.cwd(), 'reports', 'cucumber-report.zip')
const PNG_REPORT_PATH = path.join(process.cwd(), 'reports', 'cucumber', 'cucumber-report.png')
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
        output: PNG_REPORT_PATH,
        html: fs.readFileSync(SOURCE_CUCUMBER_HTML_PATH).toString()
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
                path: DESTINATION_CUCUMBER_COMPRESS_PATH
            },
            {
                filename: 'cucumber-report.png',
                path: PNG_REPORT_PATH,
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

zipFolder(SOURCE_CUCUMBER_HTML_PATH, DESTINATION_CUCUMBER_COMPRESS_PATH)
mailSender()