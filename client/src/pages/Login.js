import React from "react";

function Login() {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Welcome to BetHub
  </div>
                <div class="card-body">
                    <h5 class="card-title">Please Login to Get the Best Odds</h5>
                    <p class="card-text">Or Sign Up Below to have Access to our Network of Betting Information</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Username">
                        </input>
                        <input
                            type="text"
                            placeholder="Password">
                        </input>
                    </form>
                    <a href="#" class="btn btn-primary">Login</a>
                    <a href="#" class="btn btn-primary">Sign Up</a>
                </div>
                <div class="card-footer text-muted">
                    Beat the Bookies
  </div>
            </div>

        </div>
    )

}
export default Login;