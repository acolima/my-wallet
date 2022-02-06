import { AddRecord, Buttons, Container, Header, Record, RecordsContainer, RecordsList, Logout } from "../Components/RecordsComponents"
import logout from "../assets/logout.png"
import addIncome from "../assets/addIncome.png"
import addExpense from "../assets/addExpense.png"
import { useState, useContext, useEffect } from "react"
import AuthContext from "../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import api from "../services/MyWalletAPI"

function Records(){
  const [records, setRecords] = useState([])
  const { auth } = useContext(AuthContext)
  let balance = 0
  let navigate = useNavigate()

  useEffect(() => {
    getRecords()
  },[])

  for(const record of records){
    if(record.type === "income")
      balance += parseFloat(record.amount)
    else 
      balance -= parseFloat(record.amount)
  }

  function getRecords() {
    const promise = api.getRecords(auth.token)

    promise.then(response => setRecords(response.data))
  }
  
  function handleLogout(){
    const promise = api.logout(auth.token)

    promise.then(() => navigate("/"))
    promise.catch(error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  function handleDelete(idRecord){
    Swal.fire({
      title: 'Deseja deletar esse registro?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if(result.isConfirmed) deleteRecord(idRecord)
    })
  }

  function deleteRecord(idRecord){
    const promise = api.deleteRecord(idRecord, auth.token)

    promise.then(() => getRecords())
    promise.catch (error => Swal.fire({icon: 'error', text: error.response.data}))
  }

  function handleAdd(type){
    navigate("/add-record", {state: {type}})
  }

  function handleUpdate(id, type){
    navigate("/update-record", {state: {id, type}})
  }

  return(
    <Container balance={balance}>
      <Header>
        <h2>Olá, {auth.name}</h2>
        <Logout src={logout} alt="logout" onClick={handleLogout}/>
      </Header>
      <RecordsContainer>
        {records.length === 0 ? 
          <p className="empty-records">Não há registros de <br/>entrada ou saída</p>          
          :
          <>
            <RecordsList>
                {records.reverse().map(record => (
                  <Record type={record.type} key={record._id}>
                    <span>{record.date}</span>
                    <span className="description" onClick={() => handleUpdate(record._id, record.type)}>{record.description}</span>
                    <span className="amount">{parseFloat(record.amount).toFixed(2)}</span>
                    <button className="delete-record" onClick={() => handleDelete(record._id)}>x</button>
                  </Record>
                ))}
              </RecordsList>
              <p className="balance-text">
                <span>SALDO</span>
                <span className="balance">{balance.toFixed(2)}</span>
              </p>
          </>
        }
      </RecordsContainer>

      <Buttons>
        <AddRecord onClick={() => handleAdd("income")}>
          <img src={addIncome} alt="add income" />
          Nova <br/> entrada
        </AddRecord>
        <AddRecord onClick={() => handleAdd("expense")}>
          <img src={addExpense} alt="add expense" />
          Nova <br/> saída
        </AddRecord>
      </Buttons>

    </Container>
  )
}

export default Records