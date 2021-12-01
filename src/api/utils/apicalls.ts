import supertest from "supertest"
import { REQRES_BASE_URI } from 'src/api/config/baseuri';
import { endpoints } from "../services/endpoints";

const request = supertest(REQRES_BASE_URI)

export const makeGETCall = async (endpoint: endpoints | string) => {
    return request.get(endpoint);
}

export const makePOSTCall = async (endpoint: endpoints | string, payload: string | object) => {
    return request.post(endpoint).send(payload);
}

export const makeDELETECall = async (endpoint: endpoints | string) => {
    return request.delete(endpoint);
}