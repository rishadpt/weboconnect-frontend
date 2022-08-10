import React from 'react'
import Button from '../Button/Button'
import Inputs from '../Inputs/Inputs'
import Layout from '../Loginlayout/Layout'
import './Signup.scss'

export default function Signup() {
    return (
        <div className="signup-container">
            <Layout name="Signup">
                <div className="signup-form-body">
                    <div className="signup-form-body-input">
                        <Inputs name="Name" />
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Email" />
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Password" />
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Mobile" />
                    </div>
                    <div className="signup-form-body-input-label">
                        <input value="M" type="checkbox" />
                        <label>Male</label>
                        <input value="F" type="checkbox" />
                        <label>Female</label>
                    </div>
                </div>
                <Button name="Signup" />
            </Layout>
        </div>
    )
}
