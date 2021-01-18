import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import Odds from "./pages/Odds";
import RecordBets from "./pages/RecordBets";




function App() {

  return (

    <Router>
      <div>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route path="/odds" component={Odds} />
        <Route exact path="/recordbets" component={RecordBets} />


        <Footer />
      </div>
    </Router>

  );
}

export default App;
