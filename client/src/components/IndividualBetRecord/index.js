import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Baseball from "../../images/baseball.png"
import Soccer from "../../images/soccer.png"
import Basketball from "../../images/basketball.png"
import Sprinter from "../../images/sprinter.png"


function IndividualBetRecord() {
    const [bet, setBet] = useState({});

    const { id } = useParams()
    useEffect(() => {
        API.getBet(id)
        // .then(res => setBet(res.data))
        // .then(console.log(res.data))
        // .catch(err => console.log(err));
    }, [])


    return (
        <div>


            <div className="card mb-3">
                <span id="imgSpan">
                    <img src={Baseball} className="" alt="baseball" />
                    <img src={Soccer} className="" alt="soccer" />
                    <img src={Basketball} className="" alt="basketballer" />
                    <img src={Sprinter} className="" alt="sprinter" />
                </span>

                <div className="card-body">
                    <p className="card-title" id="hey">Selection Bet vs Opponent Bet</p>

                    <h3 className="card-text"> Date Bet Was Placed </h3>
                    <h3 className="card-text">Book Maker Used </h3>
                    <h3 className="card-text"> Bet Type </h3>
                    <h3 className="card-text"> Outcome  </h3>
                    <h3 className="card-text"> Winnings/Losses  </h3>


                    <p className="card-text"><small className="text-muted">Last updated on ADD DATE HERE...</small></p>
                </div>
            </div>




        </div>
    )
}
export default IndividualBetRecord;