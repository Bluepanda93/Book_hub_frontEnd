import React from 'react'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/books')
  }

  return props.trigger ? (
    <div className="popup-form">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className="signin col">
          <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formValues.email}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formValues.password}
                  required
                />
              </div>
              <button disabled={!formValues.email || !formValues.password}>
                Sign In
              </button>
            </form>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Login
