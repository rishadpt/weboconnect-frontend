import React, { useEffect, useState } from 'react'
import './EditProfile.scss'
import { MdModeEditOutline } from 'react-icons/md'
import Inputs from '../Inputs/Inputs'
import Header from '../Header/Header'
import { useForm } from 'react-hook-form'
import Changepassword from '../Changepassword/Changepassword'
import { weboServices } from '../../utils/Services'

export default function Editprofile() {
    const [value, setValue] = useState([])
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        weboServices.getUser(1).then((user) => {
            setValue(user)
        })
    }, [])

    const handleEdit = (data) => {
        edit ? setEdit(false) : setEdit(true)
        weboServices.editUser(data).then(
        )
    }

    const handleDelete = (data) => {
        weboServices.userDelete(data).then(res=>{
            if(res.status === 'OK'){
                
            }
        })
}

return (
    <div className="editprofile-container">
        <Header />
        <div className="editprofile-content">
            <div className="editprofile-header">
                <h1>Edit Profile</h1>
                {!edit ? <MdModeEditOutline onClick={() => edit ? setEdit(false) : setEdit(true)} /> : <p onClick={handleSubmit(handleEdit)} className="edit-save">save</p>}
            </div>
            <div onClick={handleDelete} className="delete-button">
                <p>Delete Account</p>
            </div>
            <div className="form-container ">
                <div className="input__container">
                    <label>Name</label>
                    {!edit ? <p>{value.name}</p>
                        : <Inputs name="Name" register={register} />}
                </div>
                {errors.Name && <p className="error" >Please enter your Name</p>}
                <div className="input__container">
                    <label>Email</label>
                    {!edit ? <p>{value.email}</p>
                        : <Inputs name="email" register={register} />}
                </div>
                {errors.email && <p className="error" >Please enter your Name</p>}
                <div className="input__container">
                    <label>Phone</label>
                    {!edit ? <p>{value.phone}</p> :
                        <Inputs name="phone" register={register} />}
                </div>
                {errors.phone && <p className="error" >Please enter your Name</p>}

            </div>
            <Changepassword />

        </div>


    </div>
)
}
