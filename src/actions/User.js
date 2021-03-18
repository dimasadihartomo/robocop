import {
    FIND_ALL_USER,
    FIND_USER_BY_ID,
    FIND_IMG_BY_ID
} from "../constants/action";

export function findById(id) {
    return {
        type: FIND_USER_BY_ID,
        id: id
    }
}

export function findAll() {
    return {
        type: FIND_ALL_USER
    }
}

export function findImg(id) {
    return {
        type: FIND_IMG_BY_ID,
        id: id
    }
}