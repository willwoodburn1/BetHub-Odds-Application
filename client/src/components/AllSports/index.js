import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import SpecificSportGames from "../SpecificSportGames";

function AllSports() {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch("https://api.the-odds-api.com/v3/sports/?apiKey=dcc8c1b8330bf52bc329e71cda68d7bf")
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
            <div>
                {sports.map(sport => {

                    return <Link
                        to={"/odds/" + sport.key}
                        id="oddsPageLink"
                        className={window.location.pathname === "/odds" + sport.key}

                    >
                        {/* <SpecificSportGames name={sport.key} /> */}

                        <span id="sportClickIcon"
                            className="badge rounded-pill bg-success"
                        >
                            {sport.title} <br></br> {sport.details}
                        </span>
                    </Link>

                })}

            </div>

        </div >
    )
}
export default AllSports;