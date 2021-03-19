import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUsers } from "../actions/userAction";

const RobotList = (props) => {

    useEffect(() => {
        props.getUsers()
    })

    return (
        <div>
            {props.loading ? "Loading..." : props.error ? props.error.message :
                props.data.map(u => <h3>{u.name}</h3>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findAllUser.error,
        data: state.findAllUser.data,
        loading: state.findAllUser.loading
    }
}

const mapDispatchToProps = { getUsers }

export default connect(mapStateToProps, mapDispatchToProps)(RobotList);