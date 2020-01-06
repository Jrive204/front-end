import React from "react";
import {
  HeaderStylesDiv,
  Logodiv,
  StyledpFood,
  StyledpTruck,
  StyledpTrackR,
  StyledImgLogo
} from "../styles/HeaderStyles";
import placeholder from "../img/placeholder.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStylesDiv>
      <Link to='/'>
        <Logodiv>
          <StyledpFood>Food</StyledpFood>
          <StyledpTruck>Truck</StyledpTruck>
          <StyledpTrackR>TrackR</StyledpTrackR>
          <StyledImgLogo src={placeholder} alt='icon img'></StyledImgLogo>
        </Logodiv>
      </Link>
    </HeaderStylesDiv>
  );
};

export default Header;
