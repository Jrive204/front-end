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

const Header = () => {
  return (
    <HeaderStylesDiv>
      <Logodiv>
        <StyledpFood>Food</StyledpFood>
        <StyledpTruck>Truck</StyledpTruck>
        <StyledpTrackR>TrackR</StyledpTrackR>
        <StyledImgLogo src={placeholder} alt='icon img'></StyledImgLogo>
      </Logodiv>
    </HeaderStylesDiv>
  );
};

export default Header;