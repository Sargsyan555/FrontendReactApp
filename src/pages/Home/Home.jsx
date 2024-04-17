import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.scss"
export default function Home() {
  return (
    <div className='home'>
        <h2>Welcome to Dump data fetch app</h2>
        <div className='login_registration'>
            <Link to="/login_registration">Login</Link>
            <Link to="/login_registration">Registration</Link>
        </div>
    </div>
  )
}
