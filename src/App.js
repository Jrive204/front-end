import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import CombinedLoginForm from "./CombinedLoginForm";
import CombinedSignUpForm from "./CombinedSignUpForm"
import Header from "./components/Header";


function App() {
  return (
   
    <div>
      <Header />
    

      <Route path="/login" component={CombinedLoginForm}/>
      <Route path="/signup" component={CombinedSignUpForm}/>
    
    </div>
  );
}



export default App;
