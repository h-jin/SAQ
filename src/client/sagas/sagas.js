import { all, fork } from "redux-saga/effects";
import { fetchAllProducts, fetchProducts, fetchIntelligentRecommandatedProducts, fetchSearchedProducts } from "./saga";

export default function* root() {
    yield all([
        fork(fetchAllProducts),
        fork(fetchProducts),
        fork(fetchIntelligentRecommandatedProducts),
        fork(fetchSearchedProducts)
    ]);
}