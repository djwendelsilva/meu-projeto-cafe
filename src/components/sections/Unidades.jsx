import './Unidades.css'
import Map from './Map'

function Unidades() {
  return (
    <section id="unidades" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Desde o começo</span>
          <h2 className="section-title">Aqui é a Bia</h2>
          <p className="section-subtitle">
            Mais do que café, uma história de esforço, carinho e presença de rua.
          </p>
        </div>

        <div className="grid-2 unidades-grid">
          <div className="card unidade-info">
            <h3>Nossa História</h3>

            <div className="unidade-texto">
              <p>
                O Cafezinho da Bia nasceu na Cidade Nova Rio de Janeiro, da força 
                de uma mãe solo que começou com uma mesa simples na calçada e muita 
                vontade de vencer. Aos poucos, o que era apenas um começo virou ponto
                de encontro para quem queria um café gostoso e atendimento humano.
              </p>

              <p>
                Hoje, a essência continua a mesma: servir bem, com rapidez, carinho
                e preço justo. Cada café entregue carrega trabalho, cuidado e uma
                história construída com esforço de verdade.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/nPoxua6Rh71xGsHPA"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary unidade-btn"
            >
              Ver localização
            </a>
          </div>

          <div className="card unidade-map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unidades