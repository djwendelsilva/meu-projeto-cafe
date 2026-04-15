import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>

        <p className="footer-dev">
          Desenvolvido por: <strong>Wendel Silva</strong>
        </p>

        <a
          href="mailto:djwendelrj@gmail.com"
          className="footer-email"
          rel="noopener noreferrer"
        >
          djwendelrj@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer