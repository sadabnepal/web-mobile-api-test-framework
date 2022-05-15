import addContext from 'mochawesome/addContext';
import supertest from "supertest";
import util from "util";

export const stringFormatter = (data: string, value: string | number) => {
    return util.format(data, value)
}

const formatResponse = (response: supertest.Response) => {
    return `Response: ${JSON.stringify(response.body, null, 4)}`;
}

export const logResponseToMochaReport = (context: Mocha.Context, response: supertest.Response) => {
    addContext(context, formatResponse(response))
}