import './CoffeeCards.css'

const CoffeeCard = ({ name, price, description, image, onOrder }) => {
  const formattedPrice = Number(price).toFixed(2)

  return (
    <div className="coffee-card">
      <img
        src={image}
        alt={name}
        className="coffee-image"
        onError={(e) => (e.target.src = '/fallback.jpg')}
      />

      <div className="coffee-content">
        <h3 className="coffee-title">{name}</h3>

        <p className="coffee-description">{description}</p>

        <div className="coffee-footer">
          <span className="coffee-price">R$ {formattedPrice}</span>

          <button
            className="coffee-button"
            onClick={() => onOrder && onOrder({ name, price })}
          >
            Pedir
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard