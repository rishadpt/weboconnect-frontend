import React from 'react'
import './Inputs.scss'

export default function Inputs({ name }) {

    return (
        <input className="input-container" type={name === 'Name' ? 'text' : name==='Mobile' ? 'tel' : name.toLowerCase()} placeholder={name} />

    )
}
