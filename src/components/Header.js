import React from "react";
import {
  HeaderStylesDiv,
  StyledpTrackR
} from "../styles/HeaderStyles";


import { Link } from "react-router-dom";

// import Hamburger from "../img/Hamburger"


const Header = () => {
  return (
    <HeaderStylesDiv>
    
      <Link to='/'>
      <StyledpTrackR>Food Truck TrackR</StyledpTrackR>
      </Link>

    </HeaderStylesDiv>
  );
};


export default Header;

