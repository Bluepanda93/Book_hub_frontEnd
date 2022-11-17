import Books from '../pages/BooksPage'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BookList = (props) => {
  const [booklist, setBookList] = useState([])
  useEffect(() => {
    setBookList(props.data)
  }, props.data)
  return (
    <div>
      <h1>This is my books</h1>
      <div className="booksHolder">
        {booklist.map((book) => (
          <div key={book.id} onClick={() => props.getBookDetails(book.id)}>
            <h2>{book.title}</h2>
            {/* <h3>{book.author}</h3>
            <h3>{book.genre}</h3> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
