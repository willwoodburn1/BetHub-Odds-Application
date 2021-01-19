import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function ListOfBets({ placedBets }) {
    return (
        <div id="listOfPastBetsDiv">
            <h3> Past Bets Placed </h3>
            {placedBets.map(bet => (
                <div class="list-group" key={bet.id}>


                    <Link to={"/bets/" + bet.id}>

                        <div className="collection">
                            <a className="collection-item">
                                <strong>
                                    {bet.selection} vs {bet.opponent} <br></br> Outcome: ${bet.winnings}
                                </strong>
                            </a>

                        </div>

                    </Link>


                </div>

            ))}


        </div>
    )

}
export default ListOfBets;