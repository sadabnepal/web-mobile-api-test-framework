import { assert } from 'chai';
import { createUserPayload } from "resources/payloads";
import { endpoints } from "services/endpoints";
import { logResponseToMochaReport, stringFormatter } from 'utils/formatter';
import { makeDELETECall, makeGETCall, makePOSTCall } from 'utils/httpCalls';

describe('REQ RES users api validation', () => {

    it('should verify POST user call', async function () {
        const response = await makePOSTCall(endpoints.USERS_SERVICE, createUserPayload)
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 201)
        assert.equal(response.body.name, createUserPayload.name)
        assert.equal(response.body.job, createUserPayload.job)
    });

    it('should verify GET user/{id} call', async function () {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeGETCall(userByID)
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 200)
        assert.equal(response.body.data.id, 2)
    });

    it('should verify DELETE user/{id} call', async function () {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeDELETECall(userByID)
        logResponseToMochaReport(this, response);
        assert.equal(response.statusCode, 204)
    });
});