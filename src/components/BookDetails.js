// import Books from './pages/BooksPage'
// import axios from 'axios'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const BookDetails = (props) => {

    let navigate = useNavigate()
    const [book, setBook] = useState({})
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        const detailsCall = async () => {
            await axios.get(`https://the-book-hub-generalassembly.herokuapp.com/api/books/${id}`).then
                ((res) => { setBook(res.data) })
        }
        detailsCall()
    }, [])
    const handleDelete = async (id) => {
        await axios.delete(`https://the-book-hub-generalassembly.herokuapp.com/api/books/${id}`)
        navigate('/')
    }
    return (
        <div>
            <h1>details</h1>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h2>{book.genre}</h2>
            <button onClick={() => handleDelete(book.id)} className="delete-btn">Delete</button>
        </div>
    )


}
export default BookDetails