import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { AddRecord, Login, Records, SignUp, UpdateRecord } from "./Pages/index.js"
import AuthContext from "./Contexts/AuthContext"

function App(){
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/records" element={<Records />}/>
          <Route path="/add-record" element={<AddRecord />}/>
          <Route path="/update-record" element={<UpdateRecord />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App