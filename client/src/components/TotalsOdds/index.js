import React from "react";
import "./style.css";

function TotalsOdds(props) {
    return (

        <div>
            {props.sites.map(site => {
                return (
                    <div id="totalsOdds">
                        <div id="listOfTotalsOdds">
                            <span>
                                <h3 id="bookieNameTotals">{site.site_nice}</h3>
                                <h5>Over/Under - {site.odds.totals.points[0]} Points </h5>
                                <h5> ${site.odds.totals.odds[0]} = {site.odds.totals.position[0]} </h5>
                                <h5> ${site.odds.totals.odds[1]} = {site.odds.totals.position[1]} </h5>
                            </span>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
export default TotalsOdds;