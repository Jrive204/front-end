import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Home</p>
      <Link to='/trucks'>truck wall</Link>
    </>
  );
};

export default Home;
