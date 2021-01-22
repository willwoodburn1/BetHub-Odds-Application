import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";




function ListOfBets({ placedBets }) {


    return (
        <div id="listOfBetsDiv">
            <h1 id="resultedBetsHeader"> View Resulted Bets Here</h1>
            <div className="placedBetsList">
                {placedBets.map(bet => (

                    < div className="list-group" key={bet.id} >

                        <Link to={{
                            pathname: "/bets/" + bet.id,
                            state: {
                                bet
                            }
                        }}>

                            <div>
                                <ul className="list-group" >

                                    <li className="betPlacedItem list-group-item" > {bet.selection} vs {bet.opponent}
                                        <h6> {bet.outcome} : ${bet.winnings} </h6>
                                        <h6> Placed On : {bet.createdAt}  </h6>


                                    </li>

                                </ul>


                            </div>

                        </Link>





                    </div>



                ))}


            </div>

        </div>
    )

}
export default ListOfBets;