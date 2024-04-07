import { REQ_RES_BASE_URI } from 'config/setup';
import { endpoints } from "services/endpoints";
import supertest, { Response } from "supertest";

const request = supertest(REQ_RES_BASE_URI)

export const makeGETCall = async (endpoint: endpoints | string, payload?: object, headersAPI?: Record<string, string>): Promise<Response> => {
    if (payload && headersAPI) return request.get(endpoint).set(headersAPI).send(payload);
    else if (payload) return request.get(endpoint).send(payload);
    else return request.get(endpoint);
}

export const makePOSTCall = async (endpoint: endpoints | string, payload: string | object, headers?: Record<string, string>): Promise<Response> => {
    if (headers) return request.post(endpoint).set(headers);
    return request.post(endpoint).send(payload);
}

export const makeDELETECall = async (endpoint: endpoints | string, payload?: object): Promise<Response> => {
    if (payload) return request.delete(endpoint).send(payload);
    return request.delete(endpoint);
}