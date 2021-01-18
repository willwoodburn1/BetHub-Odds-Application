import React from "react";
import { Link } from "react-router-dom";

function Login() {

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Welcome to BetHub
  </div>
                <div className="card-body">
                    <h5 className="card-title">Please Login to Get the Best Odds</h5>
                    <p className="card-text">Or Sign Up Below to have Access to our Network of Betting Information</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                        // onChange={e => setUsername(e.target.value)}
                        >
                        </input>
                        <input
                            type="password"
                            placeholder="Password"
                        // onChange={e => setPassword(e.target.value)}
                        >
                        </input>
                    </form>

                    <Link
                        to="/home"
                        id="homePageLink"
                        className={window.location.pathname === "/home"}>
                        <button type="submit"> Login</button >
                    </Link>
                    <Link
                        to="/signup"
                        id="signupLink"
                        className={window.location.pathname === "/signup"}>
                        <button type="submit"> SignUp</button >
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    Beat the Bookies
  </div>
            </div>

        </div>
    )

}
export default Login;