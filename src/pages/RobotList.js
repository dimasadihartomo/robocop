import React, { useEffect } from 'react';
import {connect} from "react-redux";
import { findAllUser} from "../actions/User";

function RobotList(props) {

    useEffect(() => {
        props.findAllUser()
        console.log(props.data)
    })

    return (
       <h1>Lists</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.findAllUser.data || []
    }
}

const mapDispatchToProps = {findAllUser}

export default connect(mapStateToProps, mapDispatchToProps)(RobotList)
