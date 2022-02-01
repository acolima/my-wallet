import { useState } from "react"
import { Button, Container, Form, Input, Logo, StyledLink } from "../Components/FormComponents"

function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
        <Input 
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input 
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input 
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input 
          type="password"
          placeholder="Confirme a senha"
        />
        <Button type="submit">Entrar</Button>
        {/* <Loader type="ThreeDots" color="#FFF" height="50" width="50" />  */}
      </Form>
      <StyledLink to="/login">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  )
}

export default SignUp