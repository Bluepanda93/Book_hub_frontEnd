import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
      <h1>This is the books page</h1>
      <div className="booksHolder">
        {books.map((book) => (
          <div key={book.id} onClick={() => getBookDetails(book.id)}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h3>{book.genre}</h3>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Books
