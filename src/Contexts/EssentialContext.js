
import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { weboServices } from "../utils/Services";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState({
    userName: "",
    userId: "",
  })

  const [auser, setAuser] = useState(false)
  const [ischecked, setChecked] = useState(null)

  const getUser = () => {
    const data = jwt_decode(localStorage.getItem('AccessToken'));
    const refresh = jwt_decode(localStorage.getItem('refreshToken'));
    setChecked(data)
    setAuser(true)
    console.log(data)
    setUserdata({
      userName: data?.user,
      userId: data?.id
    })
    console.log(data)
    if (data === undefined) {
      if (refresh) {
        weboServices.renewAccessToken(refresh).then(res => {
          const data = jwt_decode(res.token);
          setChecked(data)
          setAuser(true)
          setUserdata({
            userName: data?.user,
            userId: data?.id
          })
        })
      }
    }
  }



  const setUser = (token, refresh) => {
    localStorage.setItem('AccessToken', token)
    localStorage.setItem('refreshToken', refresh)
    getUser()
  }


  // Function to reset user on logout
  const logout = (push) => {
    localStorage.clear();
    push('/login')
    setChecked(false)
    setAuser(true)
  }

  return <AuthContext.Provider value={{ logout, setUser, getUser, ischecked, userdata, auser }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

