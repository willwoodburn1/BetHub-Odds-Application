import React from "react";
import "./style.css"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com">BetHub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                            <a className="nav-link" href="www.google.com">Features</a>
                            <a className="nav-link" href="www.google.com">Pricing</a>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}
export default Header;