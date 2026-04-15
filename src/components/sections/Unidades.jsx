import './Unidades.css'
import MapView from './Map'

const Unidades = () => {
  const mapaLink = 'https://maps.app.goo.gl/RToUpURxSzeFseTx7'

  return (
    <section id="unidades" className="unidades-section">
      <div className="unidades-content">
        <h2 className="unidades-title">Nossa Unidade</h2>

        <div className="unidades-top">
          <div className="unidades-card">
            <div className="unidades-icon">📍</div>

            <h3>Cidade Nova - RJ</h3>

            <p>
              R. Laura de Araújo
              <br />
              Rio de Janeiro - RJ
            </p>

            <a
              href={mapaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="unidades-button"
            >
              Ver no mapa
            </a>
          </div>

          <div className="unidades-map-card">
            <h3 className="unidades-map-title">Como chegar</h3>

            <div className="unidades-map-wrapper">
              <MapView />
            </div>
          </div>
        </div>

        <div className="unidades-story">
          <h3>Nossa história</h3>

          <p>
            Começamos na rua, com um carrinho simples e muito café bom.
          </p>

          <p>
            Hoje mantemos a mesma essência: rápido, direto e feito com carinho.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Unidades