import { useState } from "react"
import { Button, Container, Form, Input, Logo, StyledLink } from "../Components/Forms"

function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Container>
      <Logo>MyWallet</Logo>
      <Form>
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
        <Button type="submit">Entrar</Button>
        {/* <Loader type="ThreeDots" color="#FFF" height="50" width="50" />  */}
      </Form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  )
}

export default Login