import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";




function ListOfBets({ placedBets, deleteFunction }) {






    function earnings() {
        let wins = placedBets.filter(bet => bet.outcome === "win")
        let totalWins = 0
        if (wins.length > 0) {
            totalWins = wins.reduce((acc, win) => acc + win.winnings, 0)
        }

        let losses = placedBets.filter(bet => bet.outcome === "loss")
        let totalLosses = 0
        if (losses.length > 0) {
            totalLosses = losses.reduce((acc, loss) => acc - loss.winnings, 0)
        }


        return totalWins + totalLosses
    }


    return (
        <div id="listOfBetsDiv">
            <h1 id="resultedBetsHeader"> View Resulted Bets Here</h1>
            <div className="placedBetsList">
                {placedBets.map(bet => (

                    < div className="list-group" key={bet.id} >



                        <div>
                            <ul className="list-group" >


                                <li className="betPlacedItem list-group-item" >
                                    <Link to={{
                                        pathname: "/bets/" + bet.id,
                                        state: {
                                            bet
                                        }
                                    }}>

                                        {bet.league}: <br></br>
                                        {bet.selection} vs {bet.opponent}
                                        <h3 id="betOutcome"> {bet.outcome} : ${bet.winnings} </h3>
                                        <h6> Placed On : {bet.createdAt}  </h6>
                                    </Link>
                                    <button id="deleteBetBtn" onClick={() => deleteFunction(bet.id)}> X </button>


                                </li>

                            </ul>


                        </div>









                    </div>




                ))}







            </div>

            <div id="totalWinningsDiv">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">Total Profit/Losses: ${earnings()}</li>
                </ul>
            </div>


        </div >
    )

}
export default ListOfBets;