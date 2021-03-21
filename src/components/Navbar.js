import React from 'react';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#fbf8e8"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{marginLeft: "50%", fontFamily: "Roboto"}}>ROBOCOP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;