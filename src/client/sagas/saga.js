import { call, put, takeEvery, select } from 'redux-saga/effects'
import request from "utils/request.js";
import { constructQueries, getSearchCriteria } from "utils/processData.js";

const baseURL = "https://cloudplatform.coveo.com/rest/search?access_token=058c85fd-3c79-42a3-9236-b83d35588103";

function* fetchAllProducts(action) {
    yield takeEvery("FETCH_ALL", function* (action) {
        const allProducts = yield call(request, { url: baseURL });
        const allCriteria = getSearchCriteria(allProducts.results);
        yield put({ type: "FETCH_ALL_PRODUCTS", payload: { allProducts, allCriteria } });
    });
}
function* fetchProducts(action){
    yield takeEvery("FETCH_FILTERED_PRODUCTS", function* (action) {
        const criteria = yield select(state=>state.criteria);
        const queryStr = constructQueries(criteria.criteriaObj);
        const filteredProducts = yield call(request, { url: `${baseURL}&q=${queryStr}` });
        yield put({ type: "FETCH_PRODUCTS", payload: filteredProducts });
    });
}

function* fetchSearchedProducts(action){
    yield takeEvery("FETCH_SEARCHED_PRODUCTS", function* (action) {
        const keyWords = action.payload;
        const escapedKeyWords = keyWords.replace(/[^0-9a-z]/gi, ' ');
        const searchedProducts = yield call(request, { url: `${baseURL}&q=${escapedKeyWords}` });
        yield put({ type: "FETCH_PRODUCTS", payload: searchedProducts });
    });
}

// image we have an intelligent recommandation API, by making use of machine learning skills, we recommend products to users with similar profiles

function* fetchIntelligentRecommandatedProducts(action){
    yield takeEvery("FETCH_DATE", function* (action) {
        const filteredProducts = yield call(request, { url: `${baseURL}&q=Bière%20rousse` });
        yield put({ type: "FETCH_PRODUCTS", payload: filteredProducts });
    });
    yield takeEvery("FETCH_ANNIVERSARY", function* (action) {
        const filteredProducts = yield call(request, { url: `${baseURL}&q=@tpcepagenomsplitgroup==Merlot` });
        yield put({ type: "FETCH_PRODUCTS", payload: filteredProducts });
    });
}

export {
    fetchAllProducts,
    fetchProducts,
    fetchIntelligentRecommandatedProducts,
    fetchSearchedProducts
}
