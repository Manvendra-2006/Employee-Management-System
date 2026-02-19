import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage } from '../Utilis/LocalStorage'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userData,setuserData] = useState('')   
    useEffect(()=>{
          const {employee,admin} = getlocalstorage()
    setuserData({employee,admin})
    },[])
  return (
    <div>
        <AuthContext.Provider value={userData}>
                {children}
        </AuthContext.Provider>
    
    </div>
  )
}

export default AuthProvider