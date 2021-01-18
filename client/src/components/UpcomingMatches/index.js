import React, { useEffect, useState } from "react";
import "./style.css"



function UpcomingMatches() {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=dcc8c1b8330bf52bc329e71cda68d7bf")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setSports(data.data)
                }
            }
            );

    }, []);



    return (

        <div>
            <div className="cardUpcomingMatches" >
                <div className="upcoming-matches-card-body">
                    <h5 className="card-title "> All Upcoming Matches </h5>
                    <p className="card-text">These Games are Starting Soon so Get on Quick! </p>
                </div>
                <ul className="list-group list-group-flush">
                    {sports.map(sport => {
                        return <li className="list-group-item"> {sport.sport_nice}
                            <br></br> {sport.teams[0]} vs {sport.teams[1]} </li>



                    })}


                </ul>

            </div>
        </div>














    )

}
export default UpcomingMatches;


