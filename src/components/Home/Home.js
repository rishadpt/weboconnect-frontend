import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Contexts/EssentialContext';
import { weboServices } from '../../utils/Services'
import Header from '../Header/Header'
import './Home.scss'
import jwt_decode from "jwt-decode";
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const [data, setData] = useState([]);
  const auth = useAuth()
  const [loading, setLoading] = useState(true)
  console.log(auth.userdata)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(auth.ischecked,auth.Auser)
    const data = jwt_decode(localStorage.getItem('AccessToken'));
    console.log(data)
    if (data){
    weboServices.getUser(data.id).then((user) => {
      setData(user)
      setLoading(false)
    })
  }else{
    navigate('/login')
  }
  }, [])

  let stat = data.status
  let status = stat === 0 ? 'Pending' : stat === 1 ? 'Active' : 'deactive'
  return (
    loading ? <Loader /> :
      <div className="home-container">
        <Header gender={data.gender} />
        <div className="home-content">
          <h1>Welcome to WebOconnect</h1>
          <p>Hello <span>{data.name}</span></p>
          <h3>Your Status is <span className={stat === 0 ? 'pending' : stat === 1 ? 'active' : 'deactive'} >{status}</span></h3>
        </div>
      </div>
  )
}
