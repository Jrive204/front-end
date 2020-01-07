
import React from 'react';
import './App.css';
import LoginForm from "./Forms/LoginForm";
import SignUpForm from "./Forms/SignUpForm"
import TruckReview from "./components/TruckReview";
import Header from "./components/Header";
import {connect} from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import TruckWall from "./components/TruckWall";
import { GlobalStyle } from "./styles/GlobalStyles";
import TruckCard from "./components/TruckCard";
import PrivateRoute from "./util/PrivateRoute";
import OperatorHome from './components/OperatorHome';
import AddTruck from './Forms/AddTruck';
import EditTruck from './Forms/EditTruck';




function App(props) {

  return (

    <div className='App'>
      <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* Will use /:id instead of 'card' */}
        <PrivateRoute path='/home/trucks/:id' component={EditTruck} />
        <PrivateRoute path='/trucks/card/review' component={TruckReview} />
        <PrivateRoute path='/addtruck' component={AddTruck}/>
        <PrivateRoute path='/trucks/card' component={TruckCard} />
        <PrivateRoute path='/trucks' component={TruckWall} />
        <PrivateRoute path='/home' component={OperatorHome} />
        <Route exact path="/" component={LoginForm}/>
        {/* <Route exact path="/login" component={CombinedLoginForm}/> */}
        <Route exact path="/signup" component={SignUpForm}/>

        
      </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => {
    return {
      users: state.users,
      trucks: state.trucks
    };
};

export default connect(
  mapStateToProps,
  {}
  )(App);

