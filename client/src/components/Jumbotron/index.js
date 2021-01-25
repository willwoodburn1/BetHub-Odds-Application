import React from "react";
import bhSlogan from "../../images/sloganBlack.png"
import "./style.css"


function Jumbotron({ children }) {
    return (
        <div id="sloganDiv"

        >
            <img id="slogan" src={bhSlogan} alt="slogan"></img>

            {/* <h1>Record Your Placed Bets Below </h1>
            <h1> Or</h1>
            <h1> View Past Bets Made  </h1> */}
        </div>
    );
}

export default Jumbotron;
