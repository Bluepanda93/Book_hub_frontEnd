import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="page">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
