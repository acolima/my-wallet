import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Header, Button, Form, Input, StyledLink } from "../Components/NewRecordComponents"
import AuthContext from "../Contexts/AuthContext";
import api from "../services/MyWalletAPI";

function Update(){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("") 
  const {state} = useLocation()
  const { auth } = useContext(AuthContext)
  const id = state.id
  let type = ""
  let navigate = useNavigate()

  if(state.type === "income") type = "entrada"
  else type = "saída"

  async function handleSubmit(e){
    e.preventDefault()
    
    const record = {amount, description, type: state.type}

    const promise = api.updateRecord(id, record, auth.token)

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