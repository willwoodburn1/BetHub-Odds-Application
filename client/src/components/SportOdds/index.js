import React from "react";
import "./style.css";

function SportOdds(props) {
    return (
        <div>

            {props.sites.map(site => {
                return (
                    <div id="h2hOdds">
                        <div id="listOfH2HOdds">
                            <span>
                                <h3 id="bookieNameH2H">{site.site_nice}</h3>
                                <h5>${site.odds.h2h[0]} : ${site.odds.h2h[1]} </h5>
                            </span>
                        </div>
                    </div>

                )
            })}

        </div >
    )
}
export default SportOdds;

