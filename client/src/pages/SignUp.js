import React from "react";

function SignUp() {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Welcome to BetHub
  </div>
                <div class="card-body">
                    <h5 class="card-title">Please Fill in Your Details Below to get Started </h5>
                    <p class="card-text">In Just Seconds you Could be Given Access to all the Best Odds Available on the Market </p>
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
                    <a href="#" class="btn btn-primary">Sign Up</a>
                </div>
                <div class="card-footer text-muted">
                    Beat the Bookies
  </div>
            </div>

        </div>
    )

}
export default SignUp;