import { Link } from 'react-router-dom'
import Register from '../pages/Register'
import { useState } from 'react'

const Navbar = (props) => {
  const [registerPopupButton, setRegisterPopupButton] = useState(false)
  return (
    <nav className="navbar">
      <Register
        regisTrigger={registerPopupButton}
        setRegisTrigger={setRegisterPopupButton}
      ></Register>
      <h4>BOOK HUB</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="/add_book" className="linky">
          Add A Book
        </Link>
        <Link to="/books" className="linky">
          Review
        </Link>
        <Link>
          <button
            className="review-btn"
            onClick={() => setRegisterPopupButton(true)}
          >
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
