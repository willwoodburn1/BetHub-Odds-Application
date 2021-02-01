import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/lightBlueLogo.png"
// require('dotenv').config()

function AllSports() {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        let APIKey = process.env.REACT_APP_API_KEY
        fetch("https://api.the-odds-api.com/v3/sports/?apiKey=" + APIKey)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setSports(data.data)

                }

            });

    }, []);

    return (
        <div id="allSportsDiv">
            <h1 id="sportsTitles"> Click the Icons Below to View Matches and Odds </h1>
            <img id="backgroundLogo" src={Logo} alt="BetHub Logo"></img>
            <div>
                {sports.map(sport => {

                    if (sport.key !== "soccer_belgium_first_div") {



                        return <Link to={{
                            pathname: "/odds/" + sport.key,
                            state: {
                                sport
                            },
                        }}
                        >

                            <span id="sportClickIcon" key={sport.key}
                                className="badge rounded-pill "
                            >
                                {sport.title} <br></br> {sport.details}
                            </span>
                        </Link>
                    }

                })}

            </div>

        </div >
    )
}
export default AllSports;


