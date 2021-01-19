import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import API from "../../utils/API";


function IndividualBetRecord(props) {
    const [bet, setBet] = useState({});

    const { id } = useParams()
    useEffect(() => {
        API.getBet(id)
            .then(res => setBet(res.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <div>

            <h1>
                {bet.selection} vs {bet.opponent}
            </h1>


        </div>
    )
}
export default IndividualBetRecord;