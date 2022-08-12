import React from 'react'
import './Layout.scss'

export default function Layout({ children, name }) {
  //layout for login component
  return (
    <div className="layout-container">
      <div className="login-form-header">
        <h1>{name}</h1>
      </div>
      {children}
    </div>
  )
}
