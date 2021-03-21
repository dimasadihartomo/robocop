import {FIND_ALL_USER, FIND_ALL_USER_FAILURE, FIND_USER_BY_ID, FIND_USER_BY_ID_FAILURE } from "../constants/types";

const initialState = {
    data:[],
    loading:true
}

export function findAllUser(state = initialState, action) {

    switch (action.type) {
        case FIND_ALL_USER:
            return {
                ...state,
                data: action.payload,
                loading: false

            }
        case FIND_ALL_USER_FAILURE:
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export function findUserById(state = initialState, action) {

    switch (action.type) {
        case FIND_USER_BY_ID:
            return {
                ...state,
                data: action.payload,
                loading: false

            }
        case FIND_USER_BY_ID_FAILURE:
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}