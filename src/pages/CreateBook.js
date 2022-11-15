import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import books from './BooksPage'

const CreateBook = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    genre: ''
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  // const updateBook = async (event, id) => {
  //   event.preventDefault()
  //   let response = await axios.put(`${BASE_URL}/books/${id}`, formState)
  //   updateBook([books, response])
  //   setFormState({
  //     title: '',
  //     author: '',
  //     genre: ''
  //   })
  // }



  const handleSubmit = async (event) => {
    event.preventDefault()
    let newBook = await axios
      .post(`${BASE_URL}/books`, {
        ...formState,
        bookId: props.booksId
      })
      .catch((error) => {
        console.log(error)
      })

    setFormState({
      title: '',
      author: '',
      genre: ''
    })

    // newBook()
  }

  return (
    <div>
      <h2>Submit A Book Here!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name: </label>
        <input
          id="title"
          value={formState.title}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label htmlFor="author">Author: </label>
        <input
          id="author"
          value={formState.author}
          onChange={handleChange}
          placeholder="author"
          required
        />

        <label htmlFor="genre">Genre: </label>
        <input
          id="genre"
          value={formState.genre}
          onChange={handleChange}
          placeholder="genre"
          required
        />

        <button className="btn" type="submit">
          Submit New Book!
        </button>
      </form>
    </div>
  )
}

export default CreateBook
