import React, { createContext, useContext, useState } from 'react'
import jwt from 'jsonwebtoken'

export const EssentialContext = createContext(null);

export const useAuth = () => {
    return useContext(EssentialContext);
}
export default function Essentialprovider({ children }) {

    const [userdata, setUserdata] = useState({
        userName: '',
        userId: '',
    
      })
      const getUser = () => {
        const data = jwt.decode(localStorage.getItem('accessToken') || '{}')
        setUserdata({
          userName: data?.user,
          userId: data?.id
        })
      }
    
      const setUser = (token) => {
        localStorage.setItem('accessToken', token)
        getUser()
      }

    const userLogout = (push)=>{
        localStorage.clear();
        push('/')
    }

  
    return (
        <EssentialContext.Provider value={children}>
            {children}
        </EssentialContext.Provider>

    )
}
