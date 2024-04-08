import env from 'dotenv'
env.config()

export const RUN_MODE = process.env.MODE

export const env_sender_gmail = process.env.SENDER_GMAIL
export const env_password = process.env.GMAIL_PASSWORD
export const env_sender_name = process.env.SENDER_DISPLAY_NAME
export const env_receiver_list = process.env.MAIL_LIST