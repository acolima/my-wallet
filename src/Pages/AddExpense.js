import { useState } from "react"
import { Container, Header, Button, Form, Input } from "../Components/RegisterComponents"

function AddExpense(){
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("") 

  return(
    <Container>
      <Header>Nova saída</Header>
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
        <Button type="submit">Salvar saída</Button>
      </Form>
    </Container>
  )
}

export default AddExpense