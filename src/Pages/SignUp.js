import { Button, Container, Form, Input, Logo, StyledLink } from "../Components/FormComponents"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {ThreeDots} from 'react-loader-spinner'
import api from "../services/MyWalletAPI"
import Swal from 'sweetalert2'
import logo from "../assets/logo.svg"

function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    if(password !== passwordConfirm){
      Swal.fire({icon: 'error', text: "As senhas não coincidem"})
      setDisabled(false)
      return
    }
    
    const user = {name, email, password}
    const promise = api.signUp(user)

    promise.then(() => navigate("/"))
    promise.catch(error => {
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
    })
  }

  return (
    <Container>
      <Logo src={logo} alt="logo"/>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={disabled}
          required
        />
        <Input 
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={disabled}
          required
        />
        <Input 
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={disabled}
          required
        />
        <Input 
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          disabled={disabled}
          required
        />
        <Button type="submit" disabled={disabled}>
          {disabled ? 
          <ThreeDots color="#FFF" height={50} width={50} /> :
          "Cadastrar"}
        </Button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  )
}

export default SignUp