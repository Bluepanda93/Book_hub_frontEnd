import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './styles/BooksPage.css'

const Books = ({ user, authenticated }) => {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      let response = await axios.get(
        'https://the-book-hub-generalassembly.herokuapp.com/api/books/all_books'
      )
      console.log(response.data)
      setBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBooks()
  }, [])
  let navigate = useNavigate()

  const getBookDetails = (id) => {
    navigate(`${id}`)
  }

  return user && authenticated ? (
    <div>
      <div className="h1">
        <h1>Book Hub Library</h1>
      </div>
      <div className="booksHolder">
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => getBookDetails(book.id)}
            className="bigspace"
          >
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h4>{book.genre}</h4>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected-container">
      <div className="protected">
        <h3>Oops! You must be signed in to do that!</h3>
        <div>
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Books
