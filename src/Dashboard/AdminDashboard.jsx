import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashboard = ({Data}) => {
  return (
    <div>
        <Header  data={Data} />
        <CreateTask  />
        <AllTask data ={Data}/>
    </div>
  )
}

export default AdminDashboard