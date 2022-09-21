import React, { Component } from "react";
// import { BrowserRouter,Switch, Route } from "react-router-dom";
//views
import Home from "./views/Home.jsx";
import Gallery from "./views/Gallery.jsx";
// import Folio from "./views/Folio.jsx";
//component
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}
