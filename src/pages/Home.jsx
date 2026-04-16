import './Home.css'
import heroImage from '../assets/bia.cafe.png'

function Home() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Vim pelo site do Cafezinho da Bia e quero fazer um pedido.'
    )

    window.open(`https://wa.me/5521991902018?text=${message}`, '_blank')
  }

  return (
    <section id="home" className="home">
      <div className="container home-grid">
        <div className="home-text">
          <span className="section-badge home-badge fade-up delay-1">
            Street Coffee
          </span>

          <h1 className="fade-up delay-2">
            O café que combina
            <span> rapidez, sabor e carinho.</span>
          </h1>

          <p className="fade-up delay-3">
            Aqui o movimento da rua encontra ótima música, atendimento acolhedor
            e um café feito para quem gosta de praticidade sem abrir mão do sabor.
          </p>

          <div className="home-actions fade-up delay-4">
            <a href="#menu" className="btn btn-primary">
              Ver Cardápio
            </a>

            <button
              className="btn btn-secondary"
              onClick={handleWhatsApp}
              type="button"
            >
              Pedir no WhatsApp
            </button>
          </div>
        </div>

        <div className="home-image-wrap fade-image delay-3">
          <div className="home-glow"></div>

          <div className="home-image-box">
            <img
              src={heroImage}
              alt="Carrinho de café do Cafezinho da Bia"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home