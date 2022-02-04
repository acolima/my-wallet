import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Container, Header, Button, Form, Input, StyledLink } from "../Components/NewRegister"
import AuthContext from "../Contexts/AuthContext"

function AddIncome(){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("") 
  const { auth } = useContext(AuthContext)
  const config = {headers: {'Authorization': `Bearer ${auth.token}`}}
  let navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    
    const income = {amount, description, type: "income"}

    try {
      await axios.post("http://localhost:5000/add-register", income, config)

      navigate("/registers")
    } catch (error) {
      Swal.fire({icon: 'error', text: error.response.data})
    }
  }
  

  return(
    <Container>
      <Header>Nova entrada</Header>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="number"
          placeholder="Valor"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />
        <Input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <Button type="submit">Salvar entrada</Button>
      </Form>
      <StyledLink to="/registers">Voltar</StyledLink>
    </Container>
  )
}

export default AddIncome