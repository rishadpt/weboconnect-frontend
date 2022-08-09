import React from 'react'
import './Button.scss'

export default function Button({name}) {
  return (
    <button className="button-container">
        {name}
        </button>
  )
}
