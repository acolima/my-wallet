import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Registers from "./Pages/Registers";
import SignUp from "./Pages/SignUp";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/registers" element={<Registers />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App