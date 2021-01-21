import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";



function ListOfBets({ placedBets }) {


    return (
        <>
            <h1 id="resultdBetsHeader"> View Resulted Bets Here</h1>
            <div className="placedBetsList">
                {placedBets.map(bet => (

                    < div className="list-group" key={bet.id} >

                        <Link to={{
                            pathname: "/bets/" + bet.id,
                            greeting: "hello there how are you"
                        }}>

                            <div>
                                <ul className="list-group" >

                                    <li className="betPlacedItem list-group-item"> {bet.selection} vs {bet.opponent}
                                        <h6> {bet.outcome} : ${bet.winnings} </h6>
                                        <h6> Placed On :  </h6>

                                    </li>

                                </ul>
                            </div>

                        </Link>


                    </div>


                ))}


            </div>
        </>
    )

}
export default ListOfBets;