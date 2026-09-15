import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { NotFound } from './components/NotFound/NotFound'
import './App.css'

function App() {

  return (
    
    <BrowserRouter>
    <Navbar/>
    <Toaster position="top-right" />
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/*" element={<NotFound/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
