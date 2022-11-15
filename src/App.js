import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Books from './pages/BooksPage'
import CreateBook from './pages/CreateBook'
import BookDetails from './components/BookDetails'

const App = () => {
  return (
    <div>
      <div className="page">
        <header>
          <Navbar />
        </header>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_book" element={<CreateBook />} />
          <Route path="/books" element={<Books />} />
          <Route path='books/:id' element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
