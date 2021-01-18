import React, { useState } from "react";


function SignUp() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        console.log(username);
        console.log(password)
    }

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Welcome to BetHub
  </div>
                <div className="card-body">
                    <h5 className="card-title">Please Fill in Your Details Below to get Started </h5>
                    <p className="card-text">In Just Seconds you Could be Given Access to all the Best Odds Available on the Market </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={e => setUsername(e.target.value)}>
                        </input>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}>
                        </input>
                    </form>
                    <button className="btn btn-primary" type="submit" >Sign Up</button>
                </div>
                <div className="card-footer text-muted">
                    Beat the Bookies
  </div>
            </div>

        </div>
    )

}
export default SignUp;