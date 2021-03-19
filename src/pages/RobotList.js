import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from "../actions/userAction";

const RobotList= () => {

    const dispatch = useDispatch()
    const usersListData = useSelector(state => state.usersList)
    const {loading, error, data} = usersListData

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <>
            {loading ? "Loading..." : error ? error.message : data.map(u => <h3>{u.name}</h3>)}
        </>
    )
}

export default RobotList