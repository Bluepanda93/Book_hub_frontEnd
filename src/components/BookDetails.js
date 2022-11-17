// import Books from './pages/BooksPage'
// import axios from 'axios'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BookDetails = (props) => {
  let navigate = useNavigate()
  const [bookList, setBookList] = useState({ userId: '', bookId: '' })
  const [book, setBook] = useState({})
  const [books, updateBooks] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    genre: ''
  })
  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    // setBookList({ userId: props.user.id, bookId: parseInt(id) })
    const detailsCall = async () => {
      await axios
        .get(
          `https://the-book-hub-generalassembly.herokuapp.com/api/books/${id}`
        )
        .then((res) => {
          setBook(res.data)
        })
    }
    detailsCall()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(
      `https://the-book-hub-generalassembly.herokuapp.com/api/books/${id}`
    )
    navigate('/books')
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (event, id) => {
    event.preventDefault()
    let response = await axios.put(
      `https://the-book-hub-generalassembly.herokuapp.com/api/books/${id}`,
      formState
    )
    updateBooks([books, response])
    setFormState({ title: '', author: '', genre: '' })
  }

  const handleMyBooks = async (event) => {
    event.preventDefault()
    let response = await axios.post(
      `https://the-book-hub-generalassembly.herokuapp.com/api/books/mybooks`,
      bookList
    )
  }

  return (
    <div>
      <h1>details</h1>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <h2>{book.genre}</h2>
      <form
        onSubmit={(event) => {
          handleUpdate(event, book.id)
        }}
        className="update-form"
      >
        <label htmlFor="title">Title:</label>
        <input id="title" value={formState.title} onChange={handleChange} />
        <label htmlFor="author">Author:</label>
        <input id="author" value={formState.author} onChange={handleChange} />
        <label htmlFor="genre">Genre:</label>
        <input id="genre" value={formState.genre} onChange={handleChange} />
        <button type="submit">Update Book</button>
      </form>
      <button type="submit" onClick={handleMyBooks}>
        Add This Book
      </button>
      <button onClick={() => handleDelete(book.id)} className="delete-btn">
        Delete
      </button>
    </div>
  )
}
export default BookDetails
