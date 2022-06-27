import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Halls from "./containers/Halls";
import SingleHall from "./containers/SingleHall";
import Error from "./containers/Error";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/halls" component={Halls} />
        <Route exact path="/halls/:slug" component={SingleHall} />
        <Route exact path="/bookingForm" component={Form} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
