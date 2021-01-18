import React, { useState, useEffect } from "react";
import "./style.css";
import SportOdds from "../SportOdds";
import TotalsOdds from "../TotalsOdds";

function SpecificSportGames(props) {

    console.log(props.name)

    const [matches, setMatches] = useState([]);
    const [matches2, setMatches2] = useState([]);
    const [currentOddsList, setCurrentOddsList] = useState([]);
    const [currentTotalsList, setCurrentTotalsList] = useState([]);
    useEffect(() => {
        fetch("https://api.the-odds-api.com/v3/odds/?sport=basketball_nba&region=au&mkt=h2h&apiKey=dcc8c1b8330bf52bc329e71cda68d7bf")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setMatches(data.data)

                }
            });

        fetch("https://api.the-odds-api.com/v3/odds/?sport=basketball_nba&region=au&mkt=totals&apiKey=dcc8c1b8330bf52bc329e71cda68d7bf")
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setMatches2(data.data);

                }
            });

    }, []);

    function extractTotals(commenceTime, homeTeam) {
        return matches2.filter(match =>
            match.commence_time === commenceTime &&
            match.home_team === homeTeam
        )[0]
    }


    function displayOdds(match) {
        setCurrentOddsList(match.sites);
        setCurrentTotalsList(extractTotals(match.commence_time, match.home_team).sites)
    };



    return (
        <div>
            <div id="oddsContent">


                <div className="list-group specificSportsMatchesList">
                    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                        View the Odds for the Upcoming Matches Here
                </a>
                    {matches.map((match, index) => {
                        return (
                            <button
                                onClick={() => displayOdds(match)}
                                className="list-group-item list-group-item-action"
                                key={index}>
                                {match.teams[0]} vs {match.teams[1]}
                            </button>
                        )

                    })}


                </div>

                <div className="h2hOddsData">
                    <h2 id="h2hTitle"> Head to Head (H2H) Odds</h2>
                    <SportOdds sites={currentOddsList} />
                </div>
                <div className="totalsOddsData">
                    <h2 id="totalsOddsTitle"> Over/Under (Totals) Odds</h2>
                    <TotalsOdds sites={currentTotalsList} />
                </div>

            </div>





        </div>
    )
}
export default SpecificSportGames;
