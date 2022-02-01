import { useState } from "react"
import { Container, Header, Button, Form, Input } from "../Components/RegisterComponents"

function AddIncome(){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("") 

  return(
    <Container>
      <Header>Nova entrada</Header>
      <Form>
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
        <Button type="submit">Salvar entrada</Button>
      </Form>
    </Container>
  )
}

export default AddIncome