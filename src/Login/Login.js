import React from 'react'
import Button from '../Button/Button'
import Inputs from '../Inputs/Inputs'
import Layout from '../Loginlayout/Layout'
import './Login.scss'

export default function Login() {
    return (
        <div className="login-container">
            <Layout name="Login">
                <div className="login-form-body">
                    <div className="login-form-body-input">
                        <Inputs name="Email" />
                    </div>
                    <div className="login-form-body-input">
                    <Inputs name="Password" />
                    </div>
                </div>
                <Button name="Login" />
            </Layout>

        </div>
    )
}
