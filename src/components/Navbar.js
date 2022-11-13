import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>BOOK HUB</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="/locations" className="linky">
          Review
        </Link>
        <Link to="/form">
          <button className="review-btn">Log In</button>
        </Link>
        <Link to="/new" className="linky"></Link>
      </div>
    </nav>
  )
}
export default Navbar
