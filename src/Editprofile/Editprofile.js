import React, { useState } from 'react'
import './EditProfile.scss'
import { MdModeEditOutline } from 'react-icons/md'
import Inputs from '../Inputs/Inputs'

export default function Editprofile() {

    const [edit, setEdit] = useState(false)


    return (
        <div className="editprofile-container">
            <div className="editprofile-content">
                <div className="editprofile-header">
                    <h1>Edit Profile</h1>
                    {!edit ? <MdModeEditOutline onClick={() => edit ? setEdit(false) : setEdit(true)} /> : <p onClick={() => edit ? setEdit(false) : setEdit(true)} className="edit-save">save</p>}
                </div>
                <div className="delete-button">
                    <p>Delete Account</p>
                </div>
                <div className="form-container ">
                    <div className="input__container">
                        <label>Name</label>
                        {!edit ? <p>Rishad</p>
                            : <Inputs name="Name" />}
                    </div>
                    <div className="input__container">
                        <label>Email</label>
                        {!edit ? <p>rishadpt16@gmail.com</p>
                            : <Inputs name="email" />}
                    </div>
                    <div className="input__container">
                        <label>Phone</label>
                        {!edit ? <p>8089626456</p> :
                            <Inputs name="phone" />}
                    </div>

                </div>
                <div className="editprofile-header ">
                    <h1>Change Password</h1>
                </div>
                <div className="form-container">
                    <div className="input__container password-input ">
                        <Inputs name="current password" />
                    </div>
                    <div className="input__container password-input">
                        <Inputs name="new password" />
                    </div>
                    <div className="input__container password-input">
                        <Inputs name="confirm password" />
                    </div>
                    <p className="edit-save">save</p>
                </div>

            </div>


        </div>
    )
}
