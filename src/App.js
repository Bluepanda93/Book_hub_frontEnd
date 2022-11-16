import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Books from './pages/BooksPage'
import CreateBook from './pages/CreateBook'
import BookDetails from './components/BookDetails'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import Login from './pages/Login'
import BookList from './components/BookLists'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div className="page">
        <header>
          <Navbar
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/mybooks" element={<BookList />} />
          <Route path="/add_book" element={<CreateBook />} />
          <Route
            path="/books"
            element={<Books user={user} authenticated={authenticated} />}
          />
          <Route path="books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
