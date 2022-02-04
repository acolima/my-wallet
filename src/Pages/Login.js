import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Form, Input, Logo, StyledLink } from "../Components/FormComponents"
import {ThreeDots} from 'react-loader-spinner'
import logo from "../assets/logo.svg"
import axios from "axios"
import Swal from 'sweetalert2'
import AuthContext from "../Contexts/AuthContext"

function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)
  let navigate = useNavigate()
  const { setAuth } = useContext(AuthContext)

  async function handleSubmit(e){
    e.preventDefault()
    setDisabled(true)

    try{
      const user = {email, password}
      const response = await axios.post("http://localhost:5000/login", user)
      
      setAuth(response.data)
      navigate("/registers")
    } catch (error){
      Swal.fire({icon: 'error', text: error.response.data})
      setDisabled(false)
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="logo"/>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit" disabled={disabled}>
          {disabled ? 
          <ThreeDots color="#FFF" height={50} width={50} /> :
          "Entrar"}
        </Button>
      </Form>
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  )
}

export default Login