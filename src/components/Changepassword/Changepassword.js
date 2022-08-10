import React from 'react'
import { useForm } from 'react-hook-form';
import Inputs from '../Inputs/Inputs'
import './Changepassword.scss'

export default function Changepassword() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    return (
        <>
            <div className="editprofile-header ">
                <h1>Change Password</h1>
            </div>
            <div className="form-container">
                <div className="input__container password-input ">
                    <Inputs name="current password" register={register} />
                </div>
                <div className="input__container password-input">
                    <Inputs name="new password" register={register} />
                </div>
                <div className="input__container password-input">
                    <Inputs name="confirm password" register={register} />
                </div>
                <p  className="edit-save">save</p>
            </div>
        </>
    )
}
