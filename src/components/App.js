import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import About from "./about";
import Home from "./Home";
import ItemDetails from "./ItemDetails";
import Footer from "./Footer";
import Sellers from "./Sellers";
import SellerDetails from "./SellerDetails";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Sellers">
            <Sellers />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route path="/Sellers/:sellerId">
            <SellerDetails />
          </Route>
        </Switch>
        <Footer />
        <GlobalStyle />
      </>
    </Router>
  );
}

export default App;
