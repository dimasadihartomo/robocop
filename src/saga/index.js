import { all } from "redux-saga/effects";
import {watchFindAllUser, watchFindImgById, watchFindUserById} from "./User";

export default function* rootSaga() {
    yield all([
        watchFindAllUser(), watchFindUserById(), watchFindImgById()
    ])
}