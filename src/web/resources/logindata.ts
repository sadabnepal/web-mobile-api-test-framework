import { decodeFromBase64String } from "../utils/base64Utils";
import { internet as random } from 'faker'

const herokuappBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";

export const herokuappLoginData = {
    validUserName: 'tomsmith',
    validPassword: () => decodeFromBase64String(herokuappBase64EncodedPassword),
    invalidUserName: random.userName(),
    invalidPassword: random.password(6)
}

export const PHP_ADMIN_CREDS = {
    email: 'admin@phptravels.com',
    password: 'demoadmin'
}