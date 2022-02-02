import { AddRegister, Buttons, Container, Header, RegistersContainer } from "../Components/RegistersList"
import logout from "../assets/logout.png"
import addIncome from "../assets/addIncome.png"
import addExpense from "../assets/addExpense.png"
import Register from "../Components/Register"

function Registers(){
  const registers = [
    {date: "30/11", description: "Almoço mãe", amount: "39,90", type: "expense"},
    {date: "27/11", description: "Mercado", amount: "542,54", type: "expense"},
    {date: "26/11", description: "Compras churrasco", amount: "67,60", type: "expense"},
    {date: "20/11", description: "Empréstimo Maria", amount: "500,00", type: "income"},
    {date: "15/11", description: "Salário", amount: "3000,00", type: "income"},
  ]


  return(
    <Container>
      <Header>
        <h2>Olá, Fulano</h2>
        <img src={logout} alt="logout" />
      </Header>
      <RegistersContainer>
        {/* Não há registros de <br/>entrada ou saída */}
        <div>
          {registers.map(register => (
            <Register
              {...register}
            />
          ))}
        </div>
        <p className="balance-text">
          <span>SALDO</span>
          <span className="balance">2849,96</span>
        </p>
      </RegistersContainer>
      <Buttons>
        <AddRegister to="/add-income">
          <img src={addIncome} alt="add income" />
          Nova <br/> entrada
        </AddRegister>
        <AddRegister to="/add-expense">
          <img src={addExpense} alt="add expense" />
          Nova <br/> saída
        </AddRegister>
      </Buttons>

    </Container>
  )
}

export default Registers