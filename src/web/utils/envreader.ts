import env from 'dotenv'
env.config()

export const env_headless = process.env.WEB_HEADLESS
export const env_instance = Number(process.env.MAX_INSTANCE)

export const env_sender_gmail = process.env.SENDER_GMAIL
export const env_password = process.env.GMAIL_PASSWORD
export const env_sender_name = process.env.SENDER_DISPLAY_NAME
export const env_reciever_list = process.env.MAIL_LIST