import './Home.css'
import imagemDesktop from '../assets/bia.cafe.png'
import imagemMobile from '../assets/bia.cafe.mobile.png'

const Home = () => {
  const handleScrollToMenu = () => {
    const section = document.getElementById('cardapio')

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    const numero = '5521991902018'

    const mensagem = `Olá! Vim pelo site do Cafezinho da Bia ☕
Gostaria de fazer um pedido.

Nome:
Pedido:
Forma de pagamento:
Retirada no local.`

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="hero-text">

          <span className="hero-badge">Street Coffee</span>

          <h1>Peça antes e pegue com a Bia sem fila.</h1>

          <p>
            Escolha no site, envie no WhatsApp e retire seu café sem esperar.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleScrollToMenu}>
              Ver Cardápio
            </button>

            <button className="btn-secondary" onClick={handleWhatsApp}>
              Pedir no WhatsApp
            </button>
          </div>

        </div>

        <div className="hero-image">
          <div className="hero-image-scene">

            <div className="hero-glow"></div>

            <picture>
              <source media="(max-width: 768px)" srcSet={imagemMobile} />
              <img
                src={imagemDesktop}
                alt="Carrinho do Cafezinho da Bia"
                className="hero-img"
              />
            </picture>

            <div className="hero-ground"></div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Home