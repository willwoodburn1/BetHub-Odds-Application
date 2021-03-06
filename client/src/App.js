import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import Odds from "./pages/Odds";
import RecordBets from "./pages/RecordBets";
import ResultedBets from "./pages/ResultedBets";

// import Chart from "./pages/Chart";

// console.log(process.env.REACT_APP_API_KEY)






function App() {

  return (

    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route path="/odds" component={Odds} />
          <Route exact path="/recordbets" component={RecordBets} />
          <Route exact path="/bets/:id" component={ResultedBets} />
          {/* <Route exact path="/charts" component={Chart} /> */}
        </Switch>

      </div>
    </Router>

  );
}

export default App;
