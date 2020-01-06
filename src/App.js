
import React from 'react';
import './App.css';
import {connect} from 'react-redux';

import CombinedLoginForm from "./CombinedLoginForm";
import CombinedSignUpForm from "./CombinedSignUpForm"
import TruckReview from "./components/TruckReview";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import TruckWall from "./components/TruckWall";
import { GlobalStyle } from "./styles/GlobalStyles";
import TruckCard from "./components/TruckCard";



function App(props) {
  console.log(props)
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
        <Route exact path="/" component={CombinedLoginForm}/>
        <Route path="/login" component={CombinedLoginForm}/>
        <Route path="/signup" component={CombinedSignUpForm}/>
        
      </Switch>

    </div>
  );
}


const mapStateToProps = (state) => {
    return {
      users: state.users

    };
};

export default connect(
  mapStateToProps,
  {}
  )(App);

