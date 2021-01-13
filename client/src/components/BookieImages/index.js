import React from "react";
// import Slider from "react-slick";
import "./style.css"
import Tab from "../../images/tab.png"
import Sportsbet from "../../images/sportsbet.png"
import Betfair from "../../images/betfair.png"
import Ladbrokes from "../../images/ladbrokes.png"
import Neds from "../../images/neds.png"
import Pointsbet from "../../images/pointsbet.png"
import Unibet from "../../images/unibet.png"


function BookieImages() {
    return (
        <div id="imagesAcrossPage">
            <img src={Tab} alt="TAB"></img>
            <img src={Neds} alt="Neds"></img>
            <img src={Pointsbet} alt="PointsBet"></img>
            <img src={Ladbrokes} alt="Ladbrokes"></img>
            <img src={Sportsbet} alt="SportsBet"></img>
            <img src={Unibet} alt="UniBet"></img>
            <img src={Betfair} alt="BetFair"></img>

        </div>
    );

}
export default BookieImages;



