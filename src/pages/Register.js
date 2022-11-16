import { useState } from 'react'
import React from 'react'
import './styles/Register.css'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })

    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/login')
  }

  return props.regisTrigger ? (
    <div className="popup-form">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => props.setRegisTrigger(false)}
        >
          X
        </button>
        <div className="signin col">
          <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formValues.name}
                  required
                />
              </div>
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
              <div className="input-wrapper">
                <label htmlFor="password">Confirm Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={formValues.password}
                  required
                />
              </div>
              <button disabled={!formValues.email || !formValues.password}>
                Register
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

export default Register
