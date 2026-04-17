import './Map.css'

function Map() {
  return (
    <div className="map-frame">
      <iframe
        title="Mapa Cafezinho da Bia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.7298191088335!2d-43.20271978939679!3d-22.91121173794208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f0eedc3b285%3A0xda082a77bd51b09a!2sR.%20Laura%20de%20Ara%C3%BAjo%20-%20Cidade%20Nova%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020211-170!5e1!3m2!1spt-BR!2sbr!4v1776350373273!5m2!1spt-BR!2sbr"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map