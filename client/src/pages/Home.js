import React from "react";
import BookieImagesAndContent from "../components/BookieImagesAndContent";
import UpcomingMatches from "../components/UpcomingMatches";
import AllSports from "../components/AllSports";
// import { Redirect } from "react-router-dom";



function Home() {

    // const [user, setUser] = useState()

    // useEffect(() => {
    //     fetch("https://localhost:3001/api/user_data")
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data) {
    //                 setUser(data.data)

    //             }
    //         });

    // }, []);


    // if (user === null) {
    //     return (<Redirect to="/login"></Redirect>)
    // } else
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