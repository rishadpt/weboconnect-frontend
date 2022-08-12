import React, { useEffect, useState } from 'react'
import './EditProfile.scss'
import { MdModeEditOutline } from 'react-icons/md'
import Inputs from '../Inputs/Inputs'
import Header from '../Header/Header'
import { useForm } from 'react-hook-form'
import Changepassword from '../Changepassword/Changepassword'
import { weboServices } from '../../utils/Services'
import jwt_decode from "jwt-decode";
import { useAuth } from '../../Contexts/EssentialContext'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Popup from '../Popup/Popup'


export default function Editprofile() {
    const [value, setValue] = useState([])
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const auth = useAuth()
    var id = auth.userdata?.userId
    const navigate = useNavigate()
    const [response, setResponse] = useState(false)
    const [message, setMessage] = useState('')


    useEffect(() => {
        auth.getUser()
        const data = jwt_decode(localStorage.getItem('AccessToken'));
        weboServices.getUser(data.id).then((user) => {
            setValue(user)
            setLoading(false)
        })
    }, [])

    const handleEdit = (data) => {              //handle Edit
        edit ? setEdit(false) : setEdit(true)
        weboServices.editUser(data, id).then(
            (res) => {
                if (res.status === 'OK') {
                    weboServices.getUser(id).then((user) => {
                        setValue(user)
                        reset()
                        setResponse(true)
                        setMessage(res.message)
                    }).catch(err => {
                        reset()
                        setResponse(true)
                        setMessage(err)
                    }
                    )
                }
                else{
                    reset()
                    setResponse(true)
                    setMessage(res.message)
                }
            }
        )
    }

    const handleDelete = () => {            //deleting user
        window.confirm('Are you sure you want to delete your account?') &&
            weboServices.userDelete(id).then(res => {
                if (res.status === 'OK') {
                    auth.logout(navigate)
                }
            })
    }

    return (
        loading ? <Loader /> :
            <div className="editprofile-container">
                <Header gender={value.gender} />
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
                        {errors.email && <p className="error" >Please enter your Email </p>}
                        <div className="input__container">
                            <label>Phone</label>
                            {!edit ? <p>{value.phone}</p> :
                                <Inputs name="phone" register={register} />}
                        </div>
                        {errors.phone && <p className="error" >Please enter your Mobile number</p>}
                        {response ? <Popup submit={() => setResponse(false)} message={message} /> : null}
                    </div>
                    <Changepassword />  

                </div>


            </div>
    )
}
