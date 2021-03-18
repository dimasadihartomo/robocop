import { combineReducers } from "redux";
import { findUserById, findAllUser, findImgById } from "./User";

const rootReducer = combineReducers({
    findUserById, findAllUser, findImgById
})

export default rootReducer;