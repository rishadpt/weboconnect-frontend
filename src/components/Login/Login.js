import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Inputs from '../Inputs/Inputs'
import Layout from '../Loginlayout/Layout'
import './Login.scss'
import { weboServices } from '../../utils/Services'
import { useForm } from "react-hook-form";
import { useAuth } from '../../Contexts/EssentialContext'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const [err, setErr] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = (data) => {                 //Login function
        weboServices.userLogin(data).then(res => {
            console.log(res)
            if (res.status === 'OK') {
                setErr(false)
                auth.setUser(res.token, res.refresh)
                navigate('/')
            } else {
                setErr(true)
            }

        }
        ).catch(err => {
            console.log(err)
        }
        )
    }

    return (
        <div className="login-container">
            <Layout name="Login">
                <div className="login-form-body">
                    <div className="login-form-body-input">
                        <Inputs name="Email" register={register} />
                    </div>
                    <div className="login-form-body-input">
                        <Inputs name="Password" register={register} />
                    </div>
                    <div className="errors">
                        {(errors.Email && errors.Password) ? <p>Please enter All the field</p> : errors.Email ? <p>Email is required</p> : errors.Password ? <p>Password is required</p> : err ? <p>Invalid Credentials</p> : null}
                    </div>

                </div>
                <Button action={handleSubmit(handleLogin)} name="Login" />
            </Layout>

        </div>
    )
}
