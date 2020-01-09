import React from "react";

import { HeaderStylesDiv, StyledpTrackR } from "../styles/HeaderStyles";

import { Li, LiA, StyledLink } from "../styles/HeaderStyles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStylesDiv>

      <Link to='/'>
        <StyledpTrackR>Food Truck TrackR</StyledpTrackR>
      </Link>

      <Li>
        {/* <LiA> */}
        <StyledLink to='/home'>Home/Login</StyledLink>
        {/* </LiA> */}
      </Li>

      <Li>
        {/* <LiA> */}
        <StyledLink to='/trucks'>Truck Wall</StyledLink>
        {/* </LiA> */}
      </Li>

      <Li>
        {/* <LiA> */}
        <StyledLink to='/addtruck'>Add Truck</StyledLink>
        {/* </LiA> */}
      </Li>
    </HeaderStylesDiv>
  );
};

export default Header;
