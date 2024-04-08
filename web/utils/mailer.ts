import nodemailer from "nodemailer";
import { NodeMailOptions } from "../types/external";
import { env_password, env_sender_gmail } from "./envReader";

const GmailCredObject = { user: env_sender_gmail, pass: env_password }

export const mailSender = async (mailOptions: NodeMailOptions) => {
    nodemailer
        .createTransport({ service: "gmail", auth: GmailCredObject })
        .sendMail(mailOptions, (error, info) => error
            ? console.log(`Email did not deliver: ${error}`)
            : console.log(`Email Sent: ${info.response}`))
}