import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import Baseball from "../../images/baseball.png"
import Soccer from "../../images/soccer.png"
import Basketball from "../../images/basketball.png"
import Sprinter from "../../images/sprinter.png"
import Notes from "../Notes";


function IndividualBetRecord(props) {

    console.log(props)

    const data = useLocation();

    console.log("Link state data", data);

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
                    <p className="card-title" id="cardTitle">{data.state.bet.selection} vs {data.state.bet.opponent}</p>

                    <h3 className="card-text"> Bet Placed On: {data.state.bet.createdAt} </h3>
                    <h3 className="card-text">Book Maker Used: {data.state.bet.bookMaker} </h3>
                    <h3 className="card-text"> Bet Type: {data.state.bet.betType} </h3>
                    <h3 className="card-text"> Outcome: {data.state.bet.outcome}  </h3>
                    <h3 className="card-text"> Winnings/Losses: ${data.state.bet.winnings} </h3>


                    <p className="card-text"><small className="text-muted">Last updated {data.state.bet.updatedAt} </small></p>
                </div>
            </div>

            <Notes data={data} />




        </div >
    )
}
export default IndividualBetRecord;