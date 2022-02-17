import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Container, Header, Button, Form, Input, StyledLink } from "../Components/NewRecordComponents"
import AuthContext from "../Contexts/AuthContext"
import api from "../services/MyWalletAPI"

function AddRecord() {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const { state } = useLocation()
  let type = state.type === "income" ? "entrada" : "saída"
  const { auth } = useContext(AuthContext)
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const record = { amount, description, type: state.type }

    const promise = api.addRecord(record, auth.token)

    promise.then(() => navigate("/records"))
    promise.catch(error => Swal.fire({ icon: 'error', text: error.response.data }))
  }

  return (
    <Container>
      <Header>Nova {type}</Header>
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
        <Button type="submit">Salvar {type}</Button>
      </Form>
      <StyledLink to="/records">Voltar</StyledLink>
    </Container>
  )
}

export default AddRecord