import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Container, Header, Button, Form, Input, StyledLink } from "../Components/NewRecordComponents"
import AuthContext from "../Contexts/AuthContext"
import api from "../services/MyWalletAPI"

function Update(){
  const { state } = useLocation()
  const { record } = state
  const [amount, setAmount] = useState(record.amount)
  const [description, setDescription] = useState(record.description) 
  const { auth } = useContext(AuthContext)
  let type = ""
  let navigate = useNavigate()

  if(record.type === "income") type = "entrada"
  else type = "saída"

  async function handleSubmit(e){
    e.preventDefault()
    
    const toUpdateRecord = {amount, description, type: record.type}

    const promise = api.updateRecord(record._id, toUpdateRecord, auth.token)

    promise.then(() => navigate("/records"))
    promise.catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  return(
    <Container>
      <Header>Editar {type}</Header>
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
        <Button type="submit">Atualizar {type}</Button>
      </Form>
      <StyledLink to="/records">Voltar</StyledLink>
    </Container>
  )
}

export default Update