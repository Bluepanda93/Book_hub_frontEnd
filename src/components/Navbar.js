import { Link } from 'react-router-dom'
import Register from '../pages/Register'
import { useState } from 'react'

const Navbar = ({ props, authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        {/* <Link to="/">Feed</Link> */}
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  )

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
      {authenticated && user ? authenticatedOptions : publicOptions}
    </nav>
  )
}
export default Navbar
