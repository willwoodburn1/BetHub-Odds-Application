import React from "react";
import "./style.css";
import BookieImages from "../BookieImages"

function BookieImagesAndContent() {
    return (
        <div id="bicContent">
            <div id="bicTitle">
                <h1 id="bicH1"> Welcome to BetHub </h1>
                <h4 id="bicH4">Bringing you all the Best Odds from Australia's Top Bookmaker Sites</h4>
            </div>
            <BookieImages />
        </div>
    )
}
export default BookieImagesAndContent;