import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import { BiArrowToTop } from "react-icons/bi"
import "./index.css"
import { useEffect, useState } from "react"


function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('portfolio-theme')
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
      }
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const arrow = document.querySelector('.arrow') as HTMLElement
    const handleScroll = () => {
      if (window.scrollY > 300) {
        arrow.style.display = 'block'
      } else {
        arrow.style.display = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="line" />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Footer />

      {true && (
        <a href="#" className="arrow">
          <BiArrowToTop size={20} color="darkblue" />
        </a>
      )}
    </main>
  )
}

export default App
