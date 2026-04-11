const CoffeeCard = ({ name, price, description, image, onOrder }) => {
  const formattedPrice = Number(price).toFixed(2);

  return (
    <div style={styles.card}>
      <img
        src={image}
        alt={name}
        style={styles.image}
        onError={(e) => (e.target.src = '/fallback.jpg')}
      />

      <div style={styles.content}>
        <h3 style={styles.title}>{name}</h3>

        <p style={styles.description}>{description}</p>

        <div style={styles.footer}>
          <span style={styles.price}>R$ {formattedPrice}</span>

          <button
            style={styles.button}
            onClick={() => onOrder && onOrder({ name, price })}
          >
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '260px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: '0.3s',
  },

  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },

  content: {
    padding: '12px',
  },

  title: {
    fontSize: '1.1rem',
    marginBottom: '5px',
    color: '#222',
  },

  description: {
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '10px',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontWeight: 'bold',
    color: '#c59d5f', // alinhado com seu tema
  },

  button: {
    backgroundColor: '#c59d5f',
    color: '#000',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: '6px',
    fontSize: '0.85rem',
  },
};

export default CoffeeCard;