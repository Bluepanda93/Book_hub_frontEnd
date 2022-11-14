import { useEffect, useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/Login.css'


const Login = (props) => {

  return props.trigger ? (
    <div className="popup-form">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className="signin col">
          <div className="card-overlay centered">
            <form className="col">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  //   onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  //   value={formValues.email}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  //   onChange={handleChange}
                  type="password"
                  name="password"
                  //   value={formValues.password}
                  required
                />
              </div>
              <button
              //    disabled={!formValues.email || !formValues.password}
              >
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
