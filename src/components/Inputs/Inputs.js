import React from 'react'
import './Inputs.scss'

export default function Inputs({ name ,register}) {
    return (
        <input  {...register(name,{required:true,pattern:name === 'Email' && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,minLength: name ==='Password'&& name.includes("password") && 8,maxLength: name ==='phone' && 10})} className="input-container" type={name === 'Name' ? 'text' : name==='Mobile' ? 'tel' : name.includes('password') ? 'password' : name.toLowerCase()} placeholder={name}  />

    )
}
