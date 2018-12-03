import { all, fork } from "redux-saga/effects";
import { fetchAllProducts} from "./saga";

export default function* root() {
    yield all([
        fork(fetchAllProducts)
    ]);
}