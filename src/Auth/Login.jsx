// import React, { useState } from 'react'
// const Login = ({handleLogin1}) => {
//     const [email,setemail]= useState('')
//     const [Password,setPassword] = useState('')
//     function SubmitHandler(event){
//         event.preventDefault()
//         console.log("Email is",email)
//         console.log("Password is",Password)  
//         handleLogin1(email,Password)    
//         setPassword('')
//         setemail('')
//     }
//   return (
//     <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <form onSubmit={(event)=>SubmitHandler(event)} action="" style={{borderRadius:"1rem",height:"400px",width:"400px",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem"}}>
//             <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//             <label htmlFor="100" style={{marginRight:"10rem",fontSize:"2rem",fontWeight:"900"}}>Email</label>
//             <input onChange={(event)=>setemail(event.target.value)} type="text" placeholder='Enter Text' style={{width:"250px",height:"40px",borderRadius:"1rem",paddingLeft:"5px"}} />            
//             </div>
//             <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//             <label htmlFor="200" style={{marginRight:"8rem",fontWeight:"900",fontSize:"2rem"}}>Password</label>
//             <input onChange={(event)=>setPassword(event.target.value)} type="text" placeholder='Enter Password' style={{width:"250px",height:"40px",borderRadius:"1rem",paddingLeft:"5px"}}/>
//             </div>
//             <div>
//             <button style={{height:"40px",width:"250px",borderRadius:"1rem",fontSize:"1rem",fontWeight:"700"}}>Log In</button>
//             </div>
//         </form>
//     </div>
//   )
// }
// export default Login

import React, { useState } from 'react'

const Login = ({ handleLogin1 }) => {
  const [email, setemail] = useState('')
  const [Password, setPassword] = useState('')

  function SubmitHandler(event) {
    event.preventDefault()
    handleLogin1(email, Password)
    setPassword('')
    setemail('')
  }

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif"
    }}>

      <form 
        onSubmit={SubmitHandler}
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "20px",
          padding: "40px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          color: "white"
        }}
      >

        <h1 style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "800",
          letterSpacing: "1px"
        }}>
          Welcome Back 👋
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontWeight: "600" }}>Email</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px"
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontWeight: "600" }}>Password</label>
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #ff512f, #dd2476)",
            color: "white",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "scale(1)")
          }
        >
          Log In
        </button>

      </form>
    </div>
  )
}

export default Login
