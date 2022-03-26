import { faker } from "@faker-js/faker"

export const createUserPayload = {
    "name": faker.name.firstName() + " " + faker.name.lastName(),
    "job": faker.name.jobTitle()
}