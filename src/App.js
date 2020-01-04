import React from "react";
import "./App.css";
import TruckReview from "./components/TruckReview";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <TruckReview></TruckReview>
      <p>Hello</p>
    </div>
  );
}

export default App;
