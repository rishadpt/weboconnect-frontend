import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Contexts/EssentialContext';
import { weboServices } from '../../utils/Services';
import Inputs from '../Inputs/Inputs'
import Popup from '../Popup/Popup';
import './Changepassword.scss'

export default function Changepassword() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [err, setErr] = useState(false)
    const auth = useAuth()
    const [response, setResponse] = useState(false)
    const [message, setMessage] = useState('')


    const handleChangePassword = (data) => {
        if (data["new password"] === data["confirm password"]) {
            weboServices.changePassword(data, auth.userdata.userId).then(res => {
                if (res.status === 'OK') {
                    reset()
                    setResponse(true)
                    setMessage(res.message)
                } else {
                    setResponse(true)
                    setMessage(res.message)
                }
            })
        } else {
            setErr(true)
        }
    }

    return (
        <>
            <div className="editprofile-header ">
                <h1>Change Password</h1>
            </div>
            <div className="form-container">
                <div className="input___container password-input ">
                    <Inputs name="current password" register={register} />
                    {errors["current password"] && <p className="error" >Please enter your current password</p>}
                </div>
                <div className="input___container password-input">
                    <Inputs name="new password" register={register} />
                    {errors["new password"] && <p className="error" >Please enter your new password</p>}
                </div>
                <div className="input___container password-input">
                    <Inputs name="confirm password" register={register} />
                    {errors["confirm password"] && <p className="error" >Please enter your confirm password</p>}
                </div>
                {err ? <span className="err"> Password doesn't Matching </span> : null}
                {response ? <Popup message={message} submit={() => setResponse(false)} /> : null}
                <p onClick={handleSubmit(handleChangePassword)} className="edit-save">save</p>
            </div>
        </>
    )
}
