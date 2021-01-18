import React, { useState } from "react";
import "./style.css";

function Form() {

    const [wagered, setWagered] = useState();
    const [oddReceived, setOddReceived] = useState();


    function multiplyOdds() {
        const num1 = parseInt(wagered);
        const num2 = parseInt(oddReceived);

        return (
            num1 * num2
        )


    }

    return (
        <div>
            <div className="row">
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="your_selection" type="text" className="validate" />
                            <label for="your_selection">Your Selection</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="opponent" type="text" className="validate" />
                            <label for="opponent">Their Opponent</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="ammountWagered" type="text" className="validate" onChange={e => setWagered(e.target.value)} />
                            <label for="ammountWagered">Ammount Wagered</label>
                        </div>

                        <div className="input-field col s4">
                            <input id="oddsReceived" type="text" className="validate" onChange={e => setOddReceived(e.target.value)} />
                            <label for="oddsReceived">Odds Received</label>
                        </div>

                        <div className="input-field col s4" id="potentialWinningsDisplay">
                            <div id="potentialWinnings" placeholder="Potential Winnings" className="validate"> </div>
                            <label for="potentialWinnings" id="potentialWinningsText"> Potential Winnings: ${multiplyOdds()} </label>
                        </div>


                    </div>
                    <div className="input-field col s4">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Bookmaker Used</option>
                            <option value="sportsbet">Sportsbet</option>
                            <option value="tab">TAB</option>
                            <option value="neds">Neds</option>
                            <option value="pointsbet">PointsBet</option>
                            <option value="ladbrokes">Ladbrokes</option>
                            <option value="betfair">BetFair</option>
                            <option value="unibet">UniBet</option>
                            <option value="playup">PlayUp</option>
                        </select>
                    </div>
                    <div className="input-field col s4">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Bet Type</option>
                            <option value="win">Win(H2H)</option>
                            <option value="totals">Totals(Overs/Unders)</option>
                        </select>
                    </div>


                </form>
            </div>

        </div >
    )
}
export default Form;
