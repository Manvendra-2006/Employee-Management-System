import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import FailedTask from '../TaskList/FailedTask'
import Completed from '../TaskList/Completed'
import NewTask from '../TaskList/NewTask'
const TaskList = ({data}) => {
    console.log(data)
return (
    <div style={{display:"flex",gap:"1rem",overflowX:"auto",marginTop:"4rem"}}>
        {data.tasks.map((item)=>{            
                if(item.active){
                    return <AcceptTask data={item}/>
                }
                if(item.failed){
                    return <FailedTask data={item}/>
                }
                if(item.completed){
                    return <Completed data={item}/>
                }
                if(item.newTask){
                    return <NewTask data={item}/>
                }
                
            
        })}   
       </div>
  )
}
export default TaskList

    //  <div style={{display:"flex",gap:"1rem",overflowX:"auto",marginTop:"4rem"}}>
    //     <div style={{borderRadius:"1rem",height:"230px",width:"300px",border:"2px solid black",padding:"1rem",flexShrink:"0"}}>
    //     <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
    //         <button>{item.taskCategory}</button>
    //         <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
    //             <button>Assign Date :{item.taskAssignDate}</button>
    //             <button>DeadLine Date : {item.taskDeadline}</button>
    //         </div>
    //     </div>
    //     <h3>{item.taskTitle}</h3>
    //     <p>{item.taskDescription}</p>
    //     <button>Mark as Completed</button>
    //     </div>  
    //     </div>