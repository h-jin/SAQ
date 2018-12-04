import { all, fork } from "redux-saga/effects";
import { fetchAllProducts, fetchProducts } from "./saga";

export default function* root() {
    yield all([
        fork(fetchAllProducts),
        fork(fetchProducts)
    ]);
}