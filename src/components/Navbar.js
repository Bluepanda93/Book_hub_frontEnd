import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
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
          <button className="review-btn">Register</button>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
