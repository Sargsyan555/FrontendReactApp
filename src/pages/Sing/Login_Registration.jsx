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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fetchUsers = () => {
        return fetch('../../../db.json')
            .then(response => response.json())
            .catch(error => {
                console.error('Error loading users:', error);
                return [];
            });
    };
    const userExists = ({users},  email) => {
        return users.find(user => user.email === email);
    };
    
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        let isValid = true
        let validationErrors = {}

        if(event.target.email.value === "" || event.target.email.value == null || !emailRegex.test(event.target.email.value)){
            isValid = false
            validationErrors.email = "Emails is not valid"
        } 
        if(event.target.password.value === "" || event.target.password.value == null || event.target.password.value.length < 6){
            isValid = false
            validationErrors.password = "Password is not valid"
        } 
        setErrors(validationErrors)
        setValid(isValid)
        if(Object.keys(validationErrors).length === 0 && validationErrors){

            fetchUsers().then(users => {
                if (userExists(users, event.target.email.value)) {
                    navigate('/userPage')
                }else{
                    axios.post('http://localhost:8000/users', formData)
                    .then(result => {
                        navigate('/userPage')
                    })
                    .catch(err => alert("error"))
                }
            })
            
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
                    {errors.email}  
                </span>
                } 
                <div className='insert'>
                    <label htmlFor="email">email</label>
                    <input onChange={(event)=>setFormData({...formData, email: event.target.value})} type="text" id='email'/>
                </div>
                {valid ? <></> : 
                <span>
                    {errors.password}
                </span>
                } 
                <div className='insert'>
                    <label htmlFor="password">password</label>
                    <input onChange={(event)=>setFormData({...formData, password: event.target.value})} type="text" id='password'/>
                </div>
                <div className='buttons'>
                    <button>cancel</button>
                    <button>login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
