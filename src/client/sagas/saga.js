import { call, put, takeEvery, select } from 'redux-saga/effects'
import request from "utils/request.js";
import { constructQueries } from "utils/processData.js";

function* fetchAllProducts(action) {
    yield takeEvery("FETCH_ALL", function* (action) {
        const allProducts = yield call(request, { url: "https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103" });
        yield put({ type: "FETCH_PRODUCTS", payload: allProducts });
    });
}
function* fetchProducts(action){
    yield takeEvery("FETCH_FILTERED_PRODUCTS", function* (action) {
        const criteria = yield select(state=>state.criteria);
        const queryStr = constructQueries(criteria.criteriaObj);
        const filteredProducts = yield call(request, { url: `https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103&q=${queryStr}` });
        yield put({ type: "FETCH_PRODUCTS", payload: filteredProducts });
    });
}

export {
    fetchAllProducts,
    fetchProducts
}
