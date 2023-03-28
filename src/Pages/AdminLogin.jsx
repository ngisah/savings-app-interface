import React from 'react'
import './adminlogin.css'

const AdminLogin = () => {
  return (
    <div className='admin_login'>
        <h1>Login</h1>
        <form>
            <input required type='email' placeholder='Email' />
            <input required type='password' placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin