import React from 'react'
import {useState} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import './registration.css'

const Registration = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));

    };
    
    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const res = await axios.post('/auth/register', inputs)
            console.log(res)
        }
        catch (err) {
            console.log(err)
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
        </form>
    </div>
  )
}

export default Registration