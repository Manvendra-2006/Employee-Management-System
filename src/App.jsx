import React, { useContext, useEffect, useState } from 'react'
import Login from './Auth/Login'
import AdminDashboard from './Dashboard/AdminDashboard'
import EmployeeDashboard from './Dashboard/EmployeeDashboard'
import { admin, employees, setlocalstorage } from './Utilis/LocalStorage'
import { AuthContext } from './AuthContext/AuthProvider'
const App = () => {
  const [user, setuser] = useState('')
  const [loggedInUserData, setloggedInUserData] = useState('')
  const authData = useContext(AuthContext)
  console.log(authData)
  function handleLogin1(email, password) {
    if (email == "admin@me.com" && password == "123") {
      setuser('admin')     
      setloggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data:admin }))
    }
    else if (authData) {
      const employee = authData.employee.find((event) => email == event.email && password == event.password)
      if (employee) {
        setuser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }    
    else {
      alert("Invalid user")
      console.log("heloo")
    }
  }
  useEffect(()=>{
    setlocalstorage()
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if(loggedInUser){
      setuser(loggedInUser.role)
      setloggedInUserData(loggedInUser.data)
    }
  },[])
  console.log(loggedInUserData)
  return (
    <div>
      {!user ? <Login handleLogin1={handleLogin1} /> : ' '}
      {user == 'admin' && <AdminDashboard Data={loggedInUserData} />}
      {user == 'employee' && <EmployeeDashboard Data = {loggedInUserData}/>}
    </div>
  )
}
export default App