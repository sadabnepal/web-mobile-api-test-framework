import env from 'dotenv'
env.config()

export const env_headless = process.env.WEB_HEADLESS
export const env_sender = process.env.SENDER_GMAIL
export const env_password = process.env.GMAIL_PASSWORD
export const env_name = process.env.SENDER_DISPLAY_NAME
export const env_reciever_list = process.env.MAIL_LIST