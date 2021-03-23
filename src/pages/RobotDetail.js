import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getUserDetail } from "../actions/userAction";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

function RobotDetail(props) {

    const { id } = useParams()
    const urlImg = "https://robohash.org/" + id

    useEffect(() => {
        props.getUserDetail(id)
    })

    return (
        <div className="container" style={{height: "515px"}}>
            <div className="row" style={{marginTop: "4%"}}>
                <div className="col-md-4 card card-body">
                    <img src={urlImg} className="img-thumbnail" alt="Poster" />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4" style={{marginLeft: "10%", fontFamily: "Righteous"}}>{props.user.name}</h2>
                    <ul className="list-group list-group-item-danger" style={{marginLeft: "10%"}}>
                        <li className="list-group-item">
                            <strong>No:</strong> {props.user.id}
                        </li>
                        <li className="list-group-item">
                            <strong>Username:</strong> {props.user.username}
                        </li>
                        <li className="list-group-item">
                            <strong>Email:</strong> {props.user.email}
                        </li>
                        <li className="list-group-item">
                            <strong>Address: </strong>
                            {props.user && props.user.address && props.user.address.street ? props.user.address.street: ''}
                            , {props.user && props.user.address && props.user.address.suite ? props.user.address.suite: ''}
                            , {props.user && props.user.address && props.user.address.city ? props.user.address.city: ''}
                        </li>
                        <li className="list-group-item">
                            <strong>Zipcode: </strong>
                            {props.user && props.user.address && props.user.address.zipcode ? props.user.address.zipcode: ''}
                        </li>
                        <li className="list-group-item">
                            <strong>Phone:</strong> {props.user.phone}
                        </li>
                        <li className="list-group-item">
                            <strong>Website:</strong> {props.user.website}
                        </li>
                        <li className="list-group-item">
                            <strong>Company: </strong>
                            {props.user && props.user.company && props.user.company.name ? props.user.company.name: ''}
                        </li>
                    </ul>
                    <div>
                    <button className="rounded btn default" style={{ backgroundColor: "#d13838",
                        marginLeft: "52.5%", marginTop: "1%"}}>
                        <Link to={`/`} style={{color: "#fbf8e8", textDecoration: "none"}}>
                            Hire Me
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
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