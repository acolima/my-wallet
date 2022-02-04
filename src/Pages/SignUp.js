import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Form, Input, Logo, StyledLink } from "../Components/FormComponents"
import {ThreeDots} from 'react-loader-spinner'
import axios from "axios"
import Swal from 'sweetalert2'
import logo from "../assets/logo.svg"

function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    if(password !== passwordConfirm){
      Swal.fire({icon: 'error', text: "As senhas não coincidem"})
      setDisabled(false)
      return
    }
    
    try {
      const user = {name, email, password}
      await axios.post("http://localhost:5000/sign-up", user)
      
      navigate("/")
    } catch (error) {
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
    }
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
        />
        <Input 
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={disabled}
        />
        <Input 
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={disabled}
        />
        <Input 
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          disabled={disabled}
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