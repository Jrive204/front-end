import React from "react";
import "./App.css";
import TruckReview from "./components/TruckReview";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import TruckWall from "./components/TruckWall";
import { GlobalStyle } from "./styles/GlobalStyles";
import TruckCard from "./components/TruckCard";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* Will use /:id instead of 'card' */}
        <Route path='/trucks/card/review'>
          <TruckReview />
        </Route>
        <Route path='/trucks/card'>
          <TruckCard />
        </Route>
        <Route path='/trucks'>
          <TruckWall />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
