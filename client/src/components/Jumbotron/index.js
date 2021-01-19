import React from "react";


function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "center" }}
            className="jumbotron"
        >
            <h1>Record Your Placed Bets Below </h1>
            <h1> Or</h1>
            <h1> View Past Bets Made  </h1>
        </div>
    );
}

export default Jumbotron;
