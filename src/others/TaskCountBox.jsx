
import React from 'react'

const TaskCountBox = ({data}) => {
  return (
    <div style={{display:"flex",marginTop:"2rem",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
        <div style={{height:"150px",borderRadius:"1rem",width:"400px",gap:"0.4rem",border:"2px solid black",backgroundColor:"blue",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{fontSize:"2.5rem",fontWeight:"800",margin:"0px"}}>Complete</h1>
            <h2 style={{fontSize:"2rem",fontWeight:"800",margin:"0px"}}>{data.taskCount.completed}</h2>
        </div>
        <div style={{height:"150px",borderRadius:"1rem",width:"400px",gap:"0.4rem",border:"2px solid black",backgroundColor:"yellow",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{fontSize:"2.5rem",fontWeight:"800",margin:"0px"}}>NewTask</h1>
            <h2 style={{fontSize:"2rem",fontWeight:"800",margin:"0px"}}>{data.taskCount.newTask}</h2>
        </div><div style={{height:"150px",borderRadius:"1rem",width:"400px",gap:"0.4rem",border:"2px solid black",backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{fontSize:"2.5rem",fontWeight:"800",margin:"0px"}}>Active</h1>
            <h2 style={{fontSize:"2rem",fontWeight:"800",margin:"0px"}}>{data.taskCount.active}</h2>
        </div><div style={{height:"150px",borderRadius:"1rem",width:"400px",gap:"0.4rem",border:"2px solid black",backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{fontSize:"2.5rem",fontWeight:"800",margin:"0px"}}>Failed</h1>
            <h2 style={{fontSize:"2rem",fontWeight:"800",margin:"0px"}}>{data.taskCount.failed}</h2>
        </div>
    </div>
  )
}

export default TaskCountBox

