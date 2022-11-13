import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Home />
      </main>
    </div>
  )
}

export default App
