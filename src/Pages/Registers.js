import { AddRegister, Buttons, Container, Header, RegisterContainer } from "../Components/RegistersComponents"
import logout from "../assets/logout.png"
import addIncome from "../assets/addIncome.png"
import addExpense from "../assets/addExpense.png"

function Registers(){
  return(
    <Container>
      <Header>
        <h2>Olá, Fulano</h2>
        <img src={logout} alt="logout" />
      </Header>
      <RegisterContainer>
        Não há registros de <br/>entrada ou saída
      </RegisterContainer>
      <Buttons>
        <AddRegister>
          <img src={addIncome} alt="add income" />
          Nova <br/> entrada
        </AddRegister>
        <AddRegister>
          <img src={addExpense} alt="add expense" />
          Nova <br/> saída
        </AddRegister>
      </Buttons>

    </Container>
  )
}

export default Registers