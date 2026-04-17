import './Footer.css'

const footerLinks = [
  { href: '#home', label: 'Topo' },
  { href: '#menu', label: 'Cardápio' },
  { href: '#unidades', label: 'Unidades' },
  { href: '#contact', label: 'Contato' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Cafezinho da Bia ☕</h3>
          <p>Feito com carinho na Cidade Nova, Rio de Janeiro.</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Por WS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer