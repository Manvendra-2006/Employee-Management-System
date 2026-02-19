import React from 'react'
import Header from '../others/Header'
import TaskCountBox from '../others/TaskCountBox'
import TaskList from '../others/TaskList'

const EmployeeDashboard = ({Data}) => {
  console.log(Data)
  return (
    <div>
        <Header data={Data}/>
        <TaskCountBox data ={Data}/>
        <TaskList data={Data}/>
    </div>
  )
}

export default EmployeeDashboard