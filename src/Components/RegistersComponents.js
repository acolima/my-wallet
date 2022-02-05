import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #8C11BE;

  .balance-text{
    width: 90%;
    
    margin: 0 auto 13px;
    
    font-family: "Raleway";
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    color: #000;

    display: flex;
    justify-content: space-between;
    
  }

  .balance{
    font-family: "Raleway";
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => (props.balance >= 0) ? "#03AC00" : "#C70000"};
  }
`

const Header = styled.div`
  padding: 25px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2{
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: #fff;
  }
`

const Logout = styled.img`
  width: 25px;
  height: 25px;

  cursor: pointer;
`

const RegistersContainer = styled.div`
  box-sizing: border-box;
  height: 446px;
  width: 90%;

  margin: 0 auto;
  border-radius: 5px;
  padding-top: 20px;
  
  background: #fff;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  .empty-registers{
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center; 
    color: #868686;
  }
`

const RegistersList = styled.div`
  overflow-y: scroll;
  height: 300px;
`

const Register = styled.div`
  width: 90%;

  margin: 0 auto 13px;

  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items:center;

  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;

  color: #C6C6C6;
  
  .description{
    flex-grow: 1;
    color: #000;
  }
  .amount{
    text-align: right;
    color: ${props => (props.type === "income") ? "#03AC00" : "#C70000"};
  }
  .delete-register{
    cursor: pointer;
  }
`

const Buttons = styled.div`
  width: 90%;

  margin: 20px auto 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  
`

const AddRegister = styled(Link)`
  height: 114px;
  width: 155px;
  
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;

  background: #A328D6;

  font-family: "Raleway";
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  img{
    width: 21px;
  }
`

export {
  Container,
  Header,
  Logout,
  RegistersContainer,
  RegistersList,
  Register,
  Buttons,
  AddRegister,
}