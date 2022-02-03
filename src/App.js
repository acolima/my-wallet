import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AddExpense from "./Pages/AddExpense";
import AddIncome from "./Pages/AddIncome";
import Login from "./Pages/Login";
import Registers from "./Pages/Registers";
import SignUp from "./Pages/SignUp";
import AuthContext from "./Contexts/AuthContext"

function App(){
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/registers" element={<Registers />}/>
          <Route path="/add-income" element={<AddIncome />}/>
          <Route path="/add-expense" element={<AddExpense />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App