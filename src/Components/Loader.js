import styled from "styled-components"
import { TailSpin } from "react-loader-spinner"

function Loader(){
  return (
    <Container>
      <TailSpin color="#8C11BE" height="90" width="90" />
    </Container>
  )
}

export default Loader

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`