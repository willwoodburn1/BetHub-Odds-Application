import React from "react";
import BookieImagesAndContent from "../components/BookieImagesAndContent";
import UpcomingMatches from "../components/UpcomingMatches";
import AllSports from "../components/AllSports";
import API from "../utils/API"



function Home() {

    API.isLoggedIn()
        .catch(() => window.location.href = "/")


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