import React, { useEffect } from 'react'
import { Navigate, } from 'react-router-dom'
import { useAuth } from '../../Contexts/EssentialContext'
import './RequireAuth.scss'

//Route protecting component
export default function RequireAuth({ children }) {
    const auth = useAuth()

    useEffect(() => {
        auth.getUser()
    }, [])
    if (auth.auser) {
        if (!auth.ischecked) {
            return <Navigate to="/login" replace />
        }

        return children
    }
}