import Login from './Login'
import { useState } from 'react'

const Home = () => {
  const [popupButton, setPopupButton] = useState(false)
  return (
    <div className="home-container">
      <Login trigger={popupButton} setTrigger={setPopupButton}></Login>
      <div className="column-1">
        <h1 className="home-h1">
          WELCOME TO <span className="span-heading">BOOK HUB</span>
          <br></br>
          <button onClick={() => setPopupButton(true)} className="login-btn">
            Log In
          </button>
        </h1>
        <br></br>
      </div>
    </div>
  )
}
export default Home
