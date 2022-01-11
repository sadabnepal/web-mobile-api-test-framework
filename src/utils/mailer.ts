import nodemailer from "nodemailer";
import path from 'path';
import { zipFolder } from "./fileutils";
import { config } from 'dotenv'
config()

const sourceCucumberFolderPath = path.join(process.cwd(), 'reports', 'cucumber', 'cucumber-report.html');
const destinationCucumberZipFolderPath = path.join(process.cwd(), 'reports', 'cucumber-report.zip')
const samplePNGReport = path.join(process.cwd(), 'src', 'resources', 'cucumber-report.png') //TODO: update it to get dynamic image from html file
const sampleReportCID = "cucumber-report"
const emailBody = `<p>Dear Tester, <br><br>
Test Automation run has been completed.<br> <br>
<b>Detailed HTML Report:</b> Please find in attachement <br><br>
<b>Test Summary Snapshot: </b><br>
<img style="width:500px; width:500px;"src="cid:${sampleReportCID}" /> <br>

Regards, <br>
<b>Test Automation Hub</b></p>`

export const mailSender = () => {

    zipFolder(sourceCucumberFolderPath, destinationCucumberZipFolderPath)

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: `"${process.env.SENDER_DISPLAY_NAME}" <${process.env.GMAIL_USER}>`,
        to: process.env.Reciever_Mail_List,
        subject: "Automtion Execution Report",
        html: emailBody,
        attachments: [
            {
                filename: 'cucumber-report.zip',
                path: destinationCucumberZipFolderPath
            },
            {
                filename: 'cucumber-report.png',
                path: samplePNGReport,
                cid: sampleReportCID
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
mailSender()