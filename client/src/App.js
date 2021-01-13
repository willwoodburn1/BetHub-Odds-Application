import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
// import CarouselOfBookies from "./components/CarouselOfBookies"

function App() {
  return (

    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
