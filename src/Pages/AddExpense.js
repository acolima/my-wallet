import axios from "axios"
import dayjs from "dayjs"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Container, Header, Button, Form, Input } from "../Components/NewRegister"
import AuthContext from "../Contexts/AuthContext"

function AddExpense(){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("") 
  const { auth } = useContext(AuthContext)
  const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
  let navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    const date = dayjs().format("DD/MM")
    const expense = {amount, description, date, type: "expense"}

    try {
      await axios.post("http://localhost:5000/add-register", expense, config)

      navigate("/registers")
    } catch (error) {
      Swal.fire({icon: 'error', text: error.response.data})
    }
  }
  
  return(
    <Container>
      <Header>Nova saída</Header>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="number"
          placeholder="Valor"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Button type="submit">Salvar saída</Button>
      </Form>
    </Container>
  )
}

export default AddExpense