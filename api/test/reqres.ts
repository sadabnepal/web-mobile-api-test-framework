import { createUserPayload } from 'api/resources/payloads';
import { endpoints } from "api/services/endpoints";
import { makeDELETECall, makeGETCall, makePOSTCall } from 'api/utils/apicalls';
import { stringFormatter } from 'api/utils/formatter';
import { assert } from 'chai';

describe('REQRES users api validation', () => {

    it('should verify POST user call', async () => {
        const response = await makePOSTCall(endpoints.USERS_SERVICE, createUserPayload)
        assert.equal(response.statusCode, 201)
        assert.equal(response.body.name, createUserPayload.name)
        assert.equal(response.body.job, createUserPayload.job)
    });

    it('should verify GET user/{id} call', async () => {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeGETCall(userByID)
        assert.equal(response.statusCode, 200)
        assert.equal(response.body.data.id, 2)
    });

    it('should verify DELETE user/{id} call', async () => {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeDELETECall(userByID)
        assert.equal(response.statusCode, 204)
    });
});