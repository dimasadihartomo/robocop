import {
    FIND_ALL_USER, FIND_ALL_USER_SUCCESS, FIND_ALL_USER_FAILURE,
    FIND_USER_BY_ID, FIND_USER_BY_ID_SUCCESS, FIND_USER_BY_ID_FAILURE,
    FIND_IMG_BY_ID, FIND_IMG_BY_ID_SUCCESS, FIND_IMG_BY_ID_FAILURE
} from "../constants/action";

const initialState = {
    data: null,
    loading: false,
    error: null
}

export function findUserById(state = {...initialState, data: false}, action) {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case FIND_USER_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_USER_BY_ID_FAILURE:
            return {
                data: false,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state, data: false}
    }
}

export function findAllUser(state = initialState, action) {
    switch (action.type) {
        case FIND_ALL_USER:
            return {
                ...state,
                loading: true
            }
        case FIND_ALL_USER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_ALL_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export function findImgById(state = {...initialState, data: false}, action) {
    switch (action.type) {
        case FIND_IMG_BY_ID:
            return {
                ...state,
                data: false,
                loading: true
            }
        case FIND_IMG_BY_ID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_IMG_BY_ID_FAILURE:
            return {
                data: false,
                loading: false,
                error: action.error
            }
        default:
            return {
                ...state, data: false}
    }
}