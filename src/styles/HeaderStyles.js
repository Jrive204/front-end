import styled from "styled-components";
import {
  Link } from "react-router-dom";

export const HeaderStylesDiv = styled.div`
  text-align: center;
  width: 100%;
  height: 6.5vh;
  left: 0px;
  top: 10px;
  padding: 15px 0;
  background: #5A4E4E;
`;

export const StyledpTrackR = styled.h1`
position: absolute;
left: 26.81%;
right: 26.57%;
top: 2.03%;
bottom: 94.04%;
color: #E9BB41;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight:normal;
font-size: 45px;
line-height: 0px;
letter-spacing: 0.15px; 
padding-bottom: -20rem;
`;

export const Logodiv = styled.div`
  position: absolute;
  width: 135px;
  height: 140px;
  left: 46%;
  top: -23px;
  border-radius: 50%;
  color: white;
  background: #6a6767;
  
`;

export const StyledpFood = styled.p`
color: #FFB90F;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 0px;



/* identical to box height */

// display: flex;
// align-items: center;
// text-align: center;

  // position: absolute;
  // width: 39px;
  // height: 15px;
  // left: 13px;
  // top: 26px;
  // font-family: Risque;
  // font-style: normal;
  // font-weight: 500;
  // font-size: 1.45rem;
  // line-height: 21px;
  // display: flex;
  // align-items: center;
  // color: #000000;



`;

export const StyledpTruck = styled(StyledpFood)`
  top: 45px;
  left: 18px;
 
  
`;



export const StyledImgLogo = styled.img`
  position: absolute;
  width: 45px;
  top: 37px;
  left: 78px;

`;

export const Ul = styled.ul `
width: 100%;
list-style-type: none;
  margin: 0;
  padding: 50;
  overflow: hidden;
  background-color: white;
  margin-left: 20rem;
`

export const Li = styled.li `

float: left;

`

export const LiA= styled.a `
display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export const StyledLink = styled(Link)`
display: block;
color: black;
text-align: center;
padding: 14px 16px;
text-decoration: none;
`;

export const Stack= styled(Link)`
color: #E9BB41;
display: block;
`