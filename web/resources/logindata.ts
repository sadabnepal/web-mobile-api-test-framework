import { faker } from '@faker-js/faker';
import { decodeFromBase64String } from '../utils/base64Utils';

const herokuAppBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";

export const herokuAppLoginData = {
    validUserName: 'tomsmith',
    validPassword: () => decodeFromBase64String(herokuAppBase64EncodedPassword),
    invalidUserName: faker.internet.userName(),
    invalidPassword: faker.internet.password(6)
}