import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getUserDetail } from "../actions/userAction";
import { useParams } from "react-router";

function RobotDetail(props) {

    const { id } = useParams()
    const urlImg = "https://robohash.org/" + id

    useEffect(() => {
        props.getUserDetail(id)
    })

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" >
            <h1>{props.user.name}</h1>
            <img src={urlImg} className="card-img-top" alt="..."/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.findUserById.error,
        user: state.findUserById.data,
        loading: state.findUserById.loading
    }
}

const mapDispatchToProps = { getUserDetail }

export default connect(mapStateToProps, mapDispatchToProps)(RobotDetail);