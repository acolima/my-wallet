import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  font-family: 'Saira Stencil One', cursive;  
  font-size: 32px;
  font-weight: 400;
  line-height: 50px;
  color: #fff;
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

  cursor: text;

  background: #fff;

  :focus{
    border: 2px solid darkgray;
  }
`

const Button = styled.button`
  height: 46px;
  width: 326px;

  border-radius: 5px;

  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  color: #fff;

  background: #A328D6;
`

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  color: #fff;

`


export {
  Logo,
  Container,
  Form,
  Input,
  Button,
  StyledLink
}