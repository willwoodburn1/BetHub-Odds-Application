import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import ListOfBets from "../ListOfBets";


function Form() {

    const [wagered, setWagered] = useState(0);
    const [oddReceived, setOddReceived] = useState(0);

    const [bets, setBets] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadBets()
    }, [])

    function loadBets() {
        API.getBets()
            .then(res => setBets(res.data))
            .catch(() => window.location.href = "/");
    };

    function deleteBet(id) {
        API.deleteBet(id)
            .then(loadBets())
            .catch(err => console.log(err));
    }



    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.selection && formObject.opponent && multiplyOdds() && formObject.outcome) {
            API.saveBet({
                selection: formObject.selection,
                opponent: formObject.opponent,
                league: formObject.league,
                winnings: multiplyOdds(),
                betType: formObject.betType,
                bookMaker: formObject.bookMaker,
                outcome: formObject.outcome
            })
                .then(res => loadBets())
                .catch(err => console.log(err));
        }
    };


    function multiplyOdds() {
        const num1 = Number(wagered);
        const num2 = Number(oddReceived);

        return (num1 * num2).toFixed(2)

    }
    console.log(bets)
    return (
        <div id="formDiv">
            <h1 id="recordBetsTitle"> Record Your Previous Bet Stakes Here</h1>
            <div className="row">
                <form className="betsInputForm" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input id="your_selection" type="text" className="validate" name="selection" onChange={handleInputChange} />
                            <label id="formText" htmlFor="your_selection">Your Selection</label>
                        </div>

                        <div className="input-field">
                            <input id="opponent" type="text" className="validate" name="opponent" onChange={handleInputChange} />
                            <label id="formText" htmlFor="opponent">Their Opponent</label>
                        </div>
                        <div className="input-field ">
                            <input id="league" type="text" className="validate" name="league" onChange={handleInputChange} />
                            <label id="formText" htmlFor="league">League/Sport</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="ammountWagered" type="text" className="validate" onChange={e => setWagered(e.target.value)} />
                            <label id="formText" htmlFor="ammountWagered">Ammount Wagered</label>
                        </div>

                        <div className="input-field col s4">
                            <input id="oddsReceived" type="text" className="validate" onChange={e => setOddReceived(e.target.value)} />
                            <label id="formText" htmlFor="oddsReceived">Odds Received</label>
                        </div>

                        <div className="input-field col s4" id="potentialWinningsDisplay">
                            <div id="potentialWinnings" placeholder="Potential Winnings" className="validate" name="winnings" > {multiplyOdds()} </div>
                            <label id="formText" htmlFor="potentialWinnings" id="potentialWinningsText"></label>
                        </div>


                    </div>
                    <div className="input-field col s4">
                        <select className="form-select" aria-label="Default select example" name="bookMaker" onChange={handleInputChange}>
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
                        <select className="form-select" aria-label="Default select example" name="betType" onChange={handleInputChange}>
                            <option selected>Bet Type</option>
                            <option value="win">Win(H2H)</option>
                            <option value="totals">Totals(Overs/Unders)</option>
                        </select>
                    </div>
                    <div className="input-field col s4">
                        <select className="form-select" aria-label="Default select example" name="outcome" onChange={handleInputChange}>
                            <option selected>Outcome</option>
                            <option value="win">Win</option>
                            <option value="loss">Loss</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={!formObject.selection || !formObject.opponent || !wagered || !oddReceived || !formObject.outcome}
                        className="btn btn-outline-success "
                    >
                        Log Bet
                    </button>
                </form>

            </div>


            <ListOfBets placedBets={bets} deleteFunction={deleteBet} />

        </div >
    )
}
export default Form;
