import React from 'react'
import './Login.css'

const login = () => {
  return (
    <div className='user_login'>
        <h1>Login</h1>
        <form>
            <input required type='email' placeholder='Email' />
            <input required type='password' placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default login