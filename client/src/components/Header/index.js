import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../images/bhLogo.png"
import API from "../../utils/API";

function Header(props) {

    function handleClickEvent(event) {
        console.log(event)
        event.preventDefault();
        API.logout()
            .then(res => window.location.href = "/")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span id="headNameLogo">
                        <img id="headerLogo" src={Logo} alt="BetHub Logo"></img>
                        <span className="navbar-brand" >BetHub</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link
                                to="/home"
                                id="headerHomePageLink"
                                className={window.location.pathname === "/home"}
                            >
                                <a id="headerHomeBtn"> Home || </a>
                            </Link>
                            <Link
                                to="/recordbets"
                                id="headerRecordBetsLink"
                                className={window.location.pathname === "/recordbets"}
                            >
                                <a id="headerRecordBetsBtn"> Record Bets || </a>
                            </Link>
                            <a
                                id="logoutBtn"
                                type="submit"
                                onClick={handleClickEvent}
                            >
                                Logout

                            </a>

                            {/* <p> Welcome {} </p> */}


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}
export default Header;