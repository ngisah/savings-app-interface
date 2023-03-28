import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './registration.css'

const Registration = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const [err, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));

    };
    
    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await axios.post('/auth/register', inputs)
            navigate('/login');
        }
        catch (err) {
            setError(err.response.data)
        }
    }


  return (
    <div className='reg_form'>
        <h1>Registration</h1>
        <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input type='email' placeholder='email' name='email' onChange={handleChange} />
            <input type='text' placeholder='phone' name='phone' onChange={handleChange} />

            <input type='password' placeholder='password' name='password' onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>Do you have an account?<Link to='/login'>login</Link>
            </span>
        </form>
    </div>
  )
}

export default Registration