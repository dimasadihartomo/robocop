import axios from "axios";
import { FIND_ALL_USER, FIND_ALL_USER_FAILURE, FIND_USER_BY_ID, FIND_USER_BY_ID_FAILURE } from "../constants/types";

export const getUsers = () => async dispatch => {
    try{
        const result = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: FIND_ALL_USER,
            payload: result.data
        })
    }
    catch(error){
        dispatch( {
            type: FIND_ALL_USER_FAILURE,
            payload: error,
        })
    }
}

export const getUserDetail = (id) => async dispatch => {
    try{
        const result = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}` )
        dispatch( {
            type: FIND_USER_BY_ID,
            payload: result.data
        })
    }
    catch(error){
        dispatch( {
            type: FIND_USER_BY_ID_FAILURE,
            payload: error,
        })
    }
}