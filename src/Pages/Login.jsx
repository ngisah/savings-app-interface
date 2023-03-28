import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })

  const [err, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('/auth/login', inputs)
      navigate('/');
    }
    catch (err) {
      setError(err.response.data)
    }
  };

  return (
    <div className='user_login'>
      <h1>Login</h1>
      <form>
        <input required type='email' placeholder='Email' name='email' onChange={handleChange} />
        <input required type='password' placeholder='Password' name='password' onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account?<Link to='/registration'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login