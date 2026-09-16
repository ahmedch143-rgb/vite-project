import { useState } from 'react'
import './signin.css'

const SignIn = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dob: '',
    gender: 'male'
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Sign in submitted successfully')
  }

  return (
    <div className='signin-page'>
      <div className='signin-card'>
        <button type='button' className='back-btn' onClick={onBack}>
          ← Back
        </button>

        <h2>Sign In</h2>

        <form onSubmit={handleSubmit} className='signin-form'>
          <label>
            Email
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </label>

          <label>
            Password
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
            />
          </label>

          <label>
            Date of Birth
            <input
              type='date'
              name='dob'
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Gender
            <select name='gender' value={formData.gender} onChange={handleChange}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </label>

          <button type='submit' className='signin-submit'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
