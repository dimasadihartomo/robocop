import React, { useEffect } from 'react';
import {connect} from "react-redux";
import { findAll } from "../actions/User";

function RobotList(props) {

    return (
        <div>
           <h1>Lists</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.findAllUser.data || []
    }
}

const mapDispatchToProps = { findAll }

export default connect(mapStateToProps, mapDispatchToProps)(RobotList)
