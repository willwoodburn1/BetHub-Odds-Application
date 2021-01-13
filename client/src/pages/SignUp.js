import React from "react";

function SignUp() {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Welcome to BetHub
  </div>
                <div className="card-body">
                    <h5 className="card-title">Please Fill in Your Details Below to get Started </h5>
                    <p className="card-text">In Just Seconds you Could be Given Access to all the Best Odds Available on the Market </p>
                    <form>
                        <input
                            type="text"
                            placeholder="Username">
                        </input>
                        <input
                            type="password"
                            placeholder="Password">
                        </input>
                    </form>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="card-footer text-muted">
                    Beat the Bookies
  </div>
            </div>

        </div>
    )

}
export default SignUp;