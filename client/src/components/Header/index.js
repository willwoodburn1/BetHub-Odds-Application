import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
                            <Link
                                to="/home"
                                id="headerHomePageLink"
                                className={window.location.pathname === "/home"}
                            >
                                <a id="headerHomeBtn"> Home </a>
                            </Link>
                            <Link
                                to="/recordbets"
                                id="headerRecordBetsLink"
                                className={window.location.pathname === "/recordbets"}
                            >
                                <a id="headerRecordBetsBtn"> Record Bets </a>
                            </Link>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}
export default Header;