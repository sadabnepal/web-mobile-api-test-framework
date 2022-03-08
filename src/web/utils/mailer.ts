import nodemailer from "nodemailer";
import { env_sender_gmail, env_password } from "./envreader";

const GmailCredObject = { user: env_sender_gmail, pass: env_password }

export const mailSender = async (mailOptions: {}) => {
    nodemailer
        .createTransport({ service: "gmail", auth: GmailCredObject, })
        .sendMail(mailOptions, (error, info) => error
            ? console.log(`Email did not deliver: ${error}`)
            : console.log(`Email Sent: ${info.response}`))
}