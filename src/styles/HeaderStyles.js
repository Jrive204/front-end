import styled from "styled-components";

export const HeaderStylesDiv = styled.div`
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  padding: 10px 0;
  background: #131212;
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
  position: absolute;
  width: 39px;
  height: 15px;
  left: 13px;
  top: 26px;
  font-family: Risque;
  font-style: normal;
  font-weight: 500;
  font-size: 1.45rem;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const StyledpTruck = styled(StyledpFood)`
  top: 45px;
  left: 18px;
`;

export const StyledpTrackR = styled(StyledpFood)`
  left: 23px;
  top: 65px;
`;

export const StyledImgLogo = styled.img`
  position: absolute;
  width: 45px;
  top: 37px;
  left: 78px;

`;

