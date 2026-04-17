import { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const navLinks = [
  { href: '#menu', label: 'Cardápio' },
  { href: '#unidades', label: 'Unidades' },
  { href: '#contact', label: 'Contato' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prevState) => !prevState)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Logo Cafezinho da Bia" className="brand-logo" />
          <span className="brand-text">Cafezinho da Bia</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header