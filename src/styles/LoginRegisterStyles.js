import styled from 'styled-components';

export const Login = styled.div `
  width: 27em;
  height: 10em;
  min-height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  position: relative;
  z-index: 99;
  `
  
  export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
    border-radius: 4px;
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    z-index: 99;
    padding: 17px 10px;
    transition: transform 200ms ease-in-out;

  `
  export const Button = styled.button `
  font-size: 21px;
  padding: 5px 20px;
  border: 0;
  background-color: #DADADA;
  color: #fff;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #FFB90F;
  }
  &:focus {
    outline: none;
  `
