import React from "react";
import BookieImagesAndContent from "../components/BookieImagesAndContent";
import UpcomingMatches from "../components/UpcomingMatches";
import AllSports from "../components/AllSports";



function Home() {
    return (
        <div>
            <BookieImagesAndContent />
            <UpcomingMatches />
            <div>
                <AllSports />
            </div>


        </div>
    )
}
export default Home;