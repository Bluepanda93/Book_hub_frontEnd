// import Books from './pages/BooksPage'
// import axios from 'axios'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'


const BookDetails = (props) => {
    const [book, setBook] = useState({})
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        const detailsCall = async () => {
            await axios.get(`api/books/${id}`).then
                ((res) => { setBook(res.data) })
        }
        detailsCall()
    }, [])

    return (
        <div>
            <h1>details</h1>
            <h1>{book.title}</h1>
        </div>
    )


}
export default BookDetails