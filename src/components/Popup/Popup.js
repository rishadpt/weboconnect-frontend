import React from 'react'
import Button from '../Button/Button'
import './Popup.scss'

export default function Popup({ message, submit }) {
    //response popup
    return (
        <div className="response_container">
            <div className="response_main">
                <p className="response">{message}</p>
                <Button action={submit} name="OK" />
            </div>
        </div>
    )
}