import {
    FIND_ALL_USER, FIND_ALL_USER_SUCCESS, FIND_ALL_USER_FAILURE,
    FIND_USER_BY_ID, FIND_USER_BY_ID_SUCCESS, FIND_USER_BY_ID_FAILURE,
    FIND_IMG_BY_ID, FIND_IMG_BY_ID_SUCCESS, FIND_IMG_BY_ID_FAILURE
} from "../constants/action";
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* findUserById(action) {

    let result = yield axios.get(`https://jsonplaceholder.typicode.com/users/${action.id}`)
        .then(data => {
            return ({
                type: FIND_USER_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(e => {
            return ({
                type: FIND_USER_BY_ID_FAILURE,
                error: e
            })
        })
    yield put(result)
}

function* findAllUser() {

    let result = yield axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(data => {
            return {
                type: FIND_ALL_USER_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: FIND_ALL_USER_FAILURE,
                error: e
            }
        })

    console.log(result)

    yield put(result)
}

function* findImgById(action) {

    let result = yield axios.get(`https://robohash.org/${action.id}`)
        .then(data => {
            return ({
                type: FIND_IMG_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(e => {
            return ({
                type: FIND_IMG_BY_ID_FAILURE,
                error: e
            })
        })
    yield put(result)
}

export function* watchFindUserById() {
    yield takeLatest(FIND_USER_BY_ID, findUserById)
}

export function* watchFindAllUser() {
    yield takeLatest(FIND_ALL_USER, findAllUser)
}

export function* watchFindImgById() {
    yield takeLatest(FIND_IMG_BY_ID, findImgById)
}