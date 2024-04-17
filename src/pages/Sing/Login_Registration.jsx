import React, { useState } from 'react'
import "./Login.scss"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

export default function Login_Registration() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate() 

    const handleSubmit = (event) => {
        
        event.preventDefault();
        let isValid = true
        let validationErrors = {}
        // console.log(event.target.email.value);

        if(event.target.email.value === "" || event.target.email.value == null){
            isValid = false
            validationErrors.email = "Emails is not valid"
        } 
        if(event.target.password.value === "" || event.target.password.value == null){
            isValid = false
            validationErrors.password = "Password is not valid"
        } 
        setErrors(validationErrors)
        setValid(isValid)
        
        if(Object.keys(validationErrors).length === 0){
            axios.post('http://localhost:8000/users', formData)
            .then(result => {
                navigate('/userPage')
            })
            .catch(err => alert("error"))
        }
    }
  
  return (
    <div className='login'>
        <h2>Welcome to Dumb data fetch app</h2>
        <div className="form_content">
            <h3>Login/Registration</h3>
            <form className="form" action="" onSubmit={handleSubmit}>
                {valid ? <></> : 
                <span>
                    {errors.email};{errors.pas}
                </span>
                } 
                <div className='insert'>
                    <label htmlFor="email">email</label>
                    <input onChange={(event)=>setFormData({...formData, email: event.target.value})} type="text" id='email'/>
                </div>
                <div className='insert'>
                    <label htmlFor="password">password</label>
                    <input onChange={(event)=>setFormData({...formData, password: event.target.value})} type="text" id='password'/>
                </div>
                <div className='buttons'>
                    <button>cancl</button>
                    <button>login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
