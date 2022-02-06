import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #8C11BE;
`

const Header = styled.div`
  padding: 25px 25px 40px;

  font-family: "Raleway";
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  color: #fff;
`

const Form = styled.form`
  width: 90%;
  
  margin: 0 auto;

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
  width: 100%;

  border-radius: 5px;

  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  color: #fff;

  background: #A328D6;

  cursor: pointer;
`

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  color: #fff;
  
  padding-top: 15px;

  cursor: pointer;
`

export {
  Container,
  Header,
  Form,
  Input,
  Button,
  StyledLink
}