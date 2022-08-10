import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { weboServices } from '../../utils/Services'
import Button from '../Button/Button'
import Inputs from '../Inputs/Inputs'
import Layout from '../Loginlayout/Layout'
import './Signup.scss'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [gendererr,setGendererr] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()

    const handleSignup = (data) => {
        if(data.gender.length !== 2){

            setGendererr(false)
            weboServices.userSignup(data).then(res=>{
                if(res.status === 'OK'){
              
                    reset()
                    navigate('/login')
                }
            })
        }else{
            setGendererr(true)
        }
       
    }
    return (

        <div className="signup-container">
            <Layout name="Signup">
                <div className="signup-form-body">
                    <div className="signup-form-body-input">
                        <Inputs name="Name" register={register} />
                        {errors.Name && <p className="error">Please enter your name</p>}
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Email" register={register} />
                        {errors.Email && <p className="error">Please enter your email</p>}
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Password" register={register} />
                        {errors.Password && <p className="error">Please enter your password</p>}
                    </div>
                    <div className="signup-form-body-input">
                        <Inputs name="Mobile" register={register} />
                        {errors.Mobile && <p className="error">Please enter your mobile</p>}
                    </div>
                    <div className="signup-form-body-input-label">
                        <input value="M" type="checkbox" {...register("gender")} />
                        <label>Male</label>
                        <input value="F" type="checkbox" {...register("gender")} />
                        <label>Female</label>
                        {gendererr && <p className="error" >Only Choose One gender</p>}
                    </div>
                </div>
                <Button action={handleSubmit(handleSignup)} name="Signup" />
            </Layout>
        </div>
    )
}
