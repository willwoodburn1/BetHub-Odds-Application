import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";




function ListOfBets({ placedBets }) {

    const [earnings, setEarnings] = useState(0);

    function recordEarnings() {
        setEarnings(placedBets.winnings)
    }

    function deleteBet(id) {
        API.deleteBet(id)
            .catch(err => console.log(err));
    }

    function profit() {
        console.log(placedBets.winnings)
        placedBets.winnings.map(bet => {
            bet.reduce(function (a, b) {
                return a + b;
            }, 0)
        })
    }


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

                                    <li className="betPlacedItem list-group-item" > {bet.league}: <br></br>
                                        {bet.selection} vs {bet.opponent}
                                        <h3 id="betOutcome"> {bet.outcome} : ${bet.winnings} </h3>
                                        <h6> Placed On : {bet.createdAt}  </h6>
                                        <button id="deleteBetBtn" onClick={e => e.preventDefault()} onClick={() => deleteBet(bet.id)}> X </button>


                                    </li>

                                </ul>


                            </div>

                        </Link>





                    </div>




                ))}

                <div> {earnings} </div>


            </div>

        </div>
    )

}
export default ListOfBets;