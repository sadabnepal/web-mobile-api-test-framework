import faker from 'faker';

export const createUserPayload = {
    "name": faker.name.firstName() + " " + faker.name.lastName(),
    "job": faker.name.jobTitle()
}