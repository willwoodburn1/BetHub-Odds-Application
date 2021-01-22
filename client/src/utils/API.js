import axios from "axios";

export default {
    // Gets all bets placed
    getBets: function () {
        return axios.get("/api/bets")
    },
    // Gets the bet with given id (the one selected)
    getBet: function (id) {
        return axios.get("/api/bets/" + id);
    },
    // Delete the bet with given id
    deleteBet: function (id) {
        return axios.delete("/api/bets/" + id);
    },
    // Saves a new bet to the database
    saveBet: function (betData) {
        return axios.post("/api/bets", betData);
    },

    updateBet: function (betData) {
        return axios.put("/api/bets/", betData);
    }
};





// const BASEURL = "https://api.the-odds-api.com/v3/sports/?apiKey=";
// const APIKEY = "61b67a84dcb103f72677a50d5fd05411";

// export function getAllSports() {
//     return axios.get(BASEURL + APIKEY)
// }

// export default {
//     // Returns all the sports
//     getAllSports: function () {
//         return axios.get("https://api.the-odds-api.com/v3/sports/?apiKey=" + apiKey);
//     },

//     // Gets the odds for all upcoming sports H2H
//     getUpcomingH2H: function () {
//         return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=" + apiKey)
//     },

//     // Gets the over/under odds from all bookmakers on upcoming sports
//     getUpcomingTotals: function () {
//         return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=totals&apiKey=" + apiKey)
//     },

//     // Gets H2H odds from all bookies of particular searched sport
//     getParticularSportH2H: function (sport) {
//         return axios.get("https://api.the-odds-api.com/v3/odds/?sport=" + sport + "&region=au&mkt=h2h&apiKey=" + apiKey)
//     },

//     // Gets over/under odds on searched for sport
//     getParticularSportTotals: function (sport) {
//         return axios.get("https://api.the-odds-api.com/v3/odds/?sport=" + sport + "&region=au&mkt=totals&apiKey=" + apiKey)
//     },


// };
