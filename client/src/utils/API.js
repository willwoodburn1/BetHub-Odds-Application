import axios from "axios";

const apiKey = "61b67a84dcb103f72677a50d5fd05411"

export default {
    // Returns all the sports
    getAllSports: function () {
        return axios.get("https://api.the-odds-api.com/v3/sports/?apiKey=" + apiKey);
    },

    // Gets the odds for all upcoming sports H2H
    getUpcomingH2H: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=h2h&apiKey=" + apiKey)
    },

    // Gets the over/under odds from all bookmakers on upcoming sports
    getUpcomingTotals: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=au&mkt=totals&apiKey=" + apiKey)
    },

    // Gets H2H odds from all bookies of particular searched sport
    getParticularSportH2H: function (sport) {
        return axios.get("https://api.the-odds-api.com/v3/odds/?sport=" + sport + "&region=au&mkt=h2h&apiKey=" + apiKey)
    },

    // Gets over/under odds on searched for sport
    getParticularSportTotals: function (sport) {
        return axios.get("https://api.the-odds-api.com/v3/odds/?sport=" + sport + "&region=au&mkt=totals&apiKey=" + apiKey)
    },


};
