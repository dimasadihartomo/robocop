import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from "../actions/userAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/Spinner";

function CardView({data}) {

    const urlImg = "https://robohash.org/" + data.id

    return (
        <div className="col" style={{marginTop: "5%"}}>
            <div className="card h-80 shadow p-3 mb-5 bg-white rounded"
                 style={{padding: "2.5%", marginLeft: "10%", backgroundColor: "#fbf8e8"}}>
                    <div className="card-body" style={{marginBottom: "-10%"}}>
                        <h4 className="d-inline-block" style={{fontFamily: "Righteous", marginTop: "2%"}}>{data.name}</h4>
                        <button className="rounded-circle btn default"
                                style={{float: "right", backgroundColor: "#d13838", width: "12%"}}>
                            <Link to={`/user/${data.id}`} style={{color: "#b36457", textDecoration: "none"}}>
                                <FontAwesomeIcon icon={faInfo} color="#fbf8e8"/>
                            </Link>
                        </button>
                        <p className="card-text" style={{marginTop: "3%", fontStyle: "oblique", fontFamily: "Roboto"}}>
                            "{data.company.catchPhrase}"</p>
                    </div>
                <img src={urlImg} className="card-img-top" alt="..." style={{ marginLeft: "4.5%",
                    marginBottom: "-5%"}}/>
            </div>
        </div>
    )
}

function RobotList (props) {

    useEffect(() => {
        props.getUsers()
    })

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" >
            {props.loading ? <Spinner /> : props.error ? props.error.message :
                props.data.map((u, i) => <CardView key={i} data={u}/>)}
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