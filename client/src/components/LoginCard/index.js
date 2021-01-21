import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

function SignupCard() {

    return (

        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>BetHub</h2>
                <h2>Beat the Bookies</h2>
                <input
                    type="text"
                    placeholder="username"
                />
                <input
                    type="password"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"

                >
                    Login
            </button>
                <h5>
                    <Link to="/api/signup">Dont have an account ?</Link>
                </h5>

            </div>
        </div>
    )

}
export default SignupCard;