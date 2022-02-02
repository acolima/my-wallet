import styled from "styled-components"

function Register(props){
  const {date, description, amount, type} = props

  return (
    <Container type={type}>
      <span className="date">{date}</span>
      <span className="description">{description}</span>
      <span className="amount" >{amount}</span>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;

  margin: 0 auto 13px;

  display: flex;
  justify-content: space-between;
  align-items:center;

  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;

  .date{
    width: 15%;
    color: #C6C6C6;
  }
  .description{
    flex-grow: 1;
    color: #000;
  }
  .amount{
    text-align: right;
    color: ${props => (props.type === "income") ? "#03AC00" : "#C70000"};
  }
`

export default Register