import React from "react";
import { Line } from "react-chartjs-2"
import { useLocation } from "react-router-dom";



function LineChart() {

    const data = useLocation();

    console.log("Chart State Data", data);

    // data.state.placedBets

    return (

        <div>
            <Line
                data={{
                    labels: ['red', 'blue', 'orange', 'yellow', 'green', 'purple'],
                    datasets: [{
                        label: "# of votes",
                        data: [12, 19, 3, 5, 2, -12]
                    }]
                }}
                height={200}
                width={400}

            />

            {/* <h1> {data.state.placedBets.selection} </h1> */}



        </div >
    )
}

export default LineChart;