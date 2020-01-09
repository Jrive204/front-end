import React from "react";
import {
  HeaderStylesDiv,
  StyledpTrackR,
} from "../styles/HeaderStyles";

import { Li, LiA, StyledLink} from "../styles/HeaderStyles"


import { Link } from "react-router-dom";


const Header = () => {
  return (
    <HeaderStylesDiv>
     

<Li>
     <LiA>
     <StyledLink to="/home">Home/Login</StyledLink>
     </LiA>
 </Li>

 <Li>
     <LiA>
     <StyledLink to="/trucks">Truck Wall</StyledLink>
     </LiA>
 </Li>
 
 <Li>
     <LiA>
     <StyledLink to="/addtruck">Add Truck</StyledLink>
     </LiA>
 </Li>


      <Link to='/'>
      <StyledpTrackR>Food Truck TrackR</StyledpTrackR>
      </Link>

    </HeaderStylesDiv>
  );
};


export default Header;

