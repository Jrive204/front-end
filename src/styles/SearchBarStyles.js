import styled from "styled-components";

export const StyledSearchBar = styled.div`
  margin: 0 auto;
  margin-top: 1%;
  width: 100%;
  max-width: 550px;

  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 550px;
  width: 100%;
  height: 50px;
  background: #353535;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  color: #ffff;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: "Abel", sans-serif;
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 35px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
