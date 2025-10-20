import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
