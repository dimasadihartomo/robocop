import React from 'react';

function Footer() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#423a35"}}>
            <div className="container-fluid">
                <p className="navbar-brand"
                   style={{marginLeft: "8%", fontFamily: "Righteous", fontSize: "20px", letterSpacing: "2px",
                       color: "#fbf8e8"}}>
                    Developed By:
                    <span className="text-warning font-weight-normal"> Dimas Adi Hartomo</span>
                    , Using React JS & Redux
                    integrated with external users data
                    <a
                        href="https://jsonplaceholder.typicode.com/users/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > API</a>
                </p>
            </div>
        </nav>
    )
}

export default Footer;