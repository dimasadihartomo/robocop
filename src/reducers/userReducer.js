import {FIND_ALL_USER, FIND_ALL_USER_FAILURE} from "../constants/types";

const initialState = {
    data:[],
    loading:true
}

export default function(state = initialState, action) {

    switch (action.type) {
        case FIND_ALL_USER:
            return {
                ...state,
                data: action.payload,
                loading: false

            }
        case FIND_ALL_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}