import { call, put, takeEvery } from 'redux-saga/effects'
import request from "utils/request.js";

function* fetchAllProducts(action) {
    yield takeEvery("FETCH_ALL", function* (action) {
        const allProducts = yield call(request, { url: "https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103" });
        yield put({ type: "FETCH_PRODUCTS", payload: allProducts });
    });
}

export {
    fetchAllProducts
}
