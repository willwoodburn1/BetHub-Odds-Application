import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./style.css"
import API from "../../utils/API";
import Logo from "../../images/bhLogoGrey.png";

function SignupCard() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        if (username && password) {
            API.login({
                username: username,
                password: password
            })
                .then(res => window.location.href = "/home")
                .catch(err => setError("Username and Password don't match"));
        }
        else {
            setError("Must have a valid username and password")
        }
    };

    return (

        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>BetHub</h2>
                <h2>Beat the Bookies</h2>
                <input
                    type="text"
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={handleFormSubmit}

                >
                    Login
            </button>
                <div> {error} </div>
                <h5>
                    <Link to="/signup">Dont have an account ?</Link>
                </h5>

            </div>

            <img src={Logo} id="leftLogo" alt="logo"></img>
            <img src={Logo} id="rightLogo" alt="logo"></img>

        </div>
    )

}
export default SignupCard;