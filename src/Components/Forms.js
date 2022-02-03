import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 50px;
  width: 147px;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #8C11BE;
`

const Form = styled.form`
  width: 326px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  
`

const Input = styled.input`
  width: 100%;
  height: 58px;
  
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px;
  
  font-family: 'Raleway';
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: black;

  cursor: ${props => props.disabled ? "not-allowed" : "text"};
  ${props => props.disabled && "pointer-events: none;"}

  background: ${props => props.disabled ? "#bababa" : "#fff"};

  :focus{
    border: 2px solid darkgray;
  }
`

const Button = styled.button`
  height: 46px;
  width: 326px;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: #fff;

  background: #A328D6;

  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  color: #fff;

  cursor: pointer;
`

export {
  Logo,
  Container,
  Form,
  Input,
  Button,
  StyledLink
}