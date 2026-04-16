import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Cafezinho da Bia ☕</h3>
          <p>Feito com carinho na Cidade Nova, Rio de Janeiro.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Topo</a>
          <a href="#menu">Cardápio</a>
          <a href="#unidades">Unidades</a>
          <a href="#contact">Contato</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Cafezinho da Bia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer