import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import { ThemeProvider } from './components/ThemeContext'

function App() {

  return (
    <ThemeProvider>
    <div className='App'>
    <Header />
    <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App
