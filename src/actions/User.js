import {
    FIND_ALL_USER,
    FIND_USER_BY_ID,
    FIND_IMG_BY_ID
} from "../constants/action";
import axios from "axios";

export function findUserById(id) {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users` + id)
            .then(function (response) {
                dispatch({
                    type: FIND_USER_BY_ID,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: FIND_USER_BY_ID,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export function findAllUser() {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(function (response) {
                dispatch({
                    type: FIND_ALL_USER,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: FIND_ALL_USER,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export function findImgById(id) {
    return (dispatch) => {
        axios.get(`https://robohash.org/` + id)
            .then(function (response) {
                dispatch({
                    type: FIND_IMG_BY_ID,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch(function (error) {
                dispatch({
                    type: FIND_IMG_BY_ID,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}