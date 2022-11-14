import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Books = () => {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            let response = await axios.get('http://localhost:3001/api/books/all_books')
            console.log(response.data)
            setBooks(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getBooks()
    }, [])
    return (
        <div>
            <h1>This is the books page</h1>
        </div>
    )
}

export default Books