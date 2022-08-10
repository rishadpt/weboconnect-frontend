import React from 'react'
import Header from '../Header/Header'
import './Home.scss'
export default function Home() {
  return (
    <div className="home-container">
        <Header/>
        <div className="home-content">
            <h1>Welcome to WebOconnect</h1>
            <p>Hello <span>Mohammed</span></p>
            <h3>Your Status is Pending</h3>
          </div>
    </div>
  )
}
