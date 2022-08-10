import React, { useEffect, useState } from 'react'
import { weboServices } from '../../utils/Services'
import Header from '../Header/Header'
import './Home.scss'
export default function Home() {
  const [data, setData] = useState([]);

  useEffect((data) => {
    weboServices.getUser(1).then((user) => {
      setData(user)
    })
  }, [])
  console.log(data)
  let stat = data.status
  let status = stat === 0 ? 'Pending' : stat === 1 ? 'Active' : 'deactive'
  return (
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
