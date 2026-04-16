import { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Logo Cafezinho da Bia" className="brand-logo" />
          <span className="brand-text">Cafezinho da Bia</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          type="button"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#menu" onClick={closeMenu}>Cardápio</a>
          <a href="#unidades" onClick={closeMenu}>Unidades</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header