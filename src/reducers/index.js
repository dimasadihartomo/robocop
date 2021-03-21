import { combineReducers } from 'redux'
import { findAllUser, findUserById } from './userReducer'

const rootReducer = combineReducers({
    findAllUser, findUserById
})

export default rootReducer;