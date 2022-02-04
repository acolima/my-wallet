import { AddRegister, Buttons, Container, Header, Register, RegistersContainer, RegistersList, Logout } from "../Components/RegistersComponents"
import logout from "../assets/logout.png"
import addIncome from "../assets/addIncome.png"
import addExpense from "../assets/addExpense.png"
import { useState, useContext, useEffect } from "react"
import AuthContext from "../Contexts/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function Registers(){
  const [registers, setRegisters] = useState([])
  const { auth } = useContext(AuthContext)
  const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
  let balance = 0
  let navigate = useNavigate()

  useEffect(() => {
    getRegisters()
  },[])

  async function getRegisters() {
    const response = await axios.get("http://localhost:5000/registers", config)
    
    setRegisters(response.data)
  }
  
  for(const register of registers){
    if(register.type === "income")
      balance += parseFloat(register.amount)
    else 
      balance -= parseFloat(register.amount)
  }

  async function handleLogout(){
    navigate("/")
    
    try{  
      await axios.delete("http://localhost:5000/logout", config)
    } catch (error) {
      Swal.fire({icon: 'error', text: error.response.data})

    }

  }

  return(
    <Container balance={balance}>
      <Header>
        <h2>Olá, {auth.name}</h2>
        <Logout src={logout} alt="logout" onClick={handleLogout}/>
      </Header>
      <RegistersContainer>
        {/* <p className="empty-registers">Não há registros de <br/>entrada ou saída</p> */}
        <RegistersList>
          {registers.reverse().map(register => (
            <Register type={register.type} key={register._id}>
              <span className="date">{register.date}</span>
              <span className="description">{register.description}</span>
              <span className="amount" >{register.amount}</span>
            </Register>
          ))}
        </RegistersList>
        <p className="balance-text">
          <span>SALDO</span>
          <span className="balance">{balance.toFixed(2)}</span>
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