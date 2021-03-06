import React, { useEffect, useState } from "react";
import "./style.css"



function UpcomingMatches() {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        // let APIKey = process.env.REACT_APP_API_KEY
        fetch("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=12c615179c088aebf6a82efb02f99178")
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
                    <h5 className="card-title" id="titleMatchUp"> All Upcoming Matches </h5>
                    <p className="card-text">These Games are Starting Soon so Get on Quick! </p>
                </div>
                <ul className="list-group list-group-flush">
                    {sports.map(sport => {
                        return <li className="list-group-item"> {sport.sport_nice}
                            <br></br> {sport.teams[0]} vs {sport.teams[1]}
                            <br></br> {sport.commence_time} </li>



                    })}


                </ul>

            </div>
        </div>














    )

}
export default UpcomingMatches;


