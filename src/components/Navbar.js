import React from 'react';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#423a35"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"
                   style={{marginLeft: "8%", fontFamily: "Righteous", fontSize: "40px", letterSpacing: "2px",
                       color: "#fbf8e8"}}>
                    ROBOCOP</a>
            </div>
        </nav>
    )
}

export default Navbar;