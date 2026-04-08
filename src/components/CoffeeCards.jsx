const CoffeeCard = ({ name, price, description, image }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>R$ {price}</span>
          <button style={styles.button}>Adicionar</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '280px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    margin: '15px'
  },
  imageContainer: {
    height: '180px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  content: {
    padding: '1.5rem',
    textAlign: 'left'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#3e2723',
    fontSize: '1.25rem'
  },
  description: {
    color: '#6d4c41',
    fontSize: '0.9rem',
    height: '40px',
    marginBottom: '15px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#2e7d32'
  },
  button: {
    backgroundColor: '#3e2723',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default CoffeeCard;

