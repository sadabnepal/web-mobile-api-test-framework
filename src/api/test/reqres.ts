import { assert } from 'chai'
import { createUserPayload } from 'src/api/resources/payloads';
import { makeDELETECall, makeGETCall, makePOSTCall } from 'src/api/utils/apicalls';
import { endpoints } from "src/api/services/endpoints"
import { stringFormatter } from 'src/api/utils/formatter';

describe('REQRES users api validation', () => {

    it('should call POST user', async () => {
        const response = await makePOSTCall(endpoints.USERS_SERVICE, createUserPayload)
        assert.equal(response.statusCode, 201)
        assert.equal(response.body.name, createUserPayload.name)
        assert.equal(response.body.job, createUserPayload.job)
    });

    it('should call GET user/{id}', async () => {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeGETCall(userByID)
        assert.equal(response.statusCode, 200)
        assert.equal(response.body.data.id, 2)
    });

    it('should call DELETE user/{id}', async () => {
        const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
        const response = await makeDELETECall(userByID)
        assert.equal(response.statusCode, 204)
    });
});