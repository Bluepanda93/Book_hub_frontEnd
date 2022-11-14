import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Books from './pages/BooksPage'
const App = () => {
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
