const CoffeeCard = ({ name, price, description, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.footer}>
          <span style={styles.price}>R$ {price}</span>
          <button style={styles.button}>Pedir Agora</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '260px',
    backgroundColor: '#fff',
    border: '2px solid #eee',
    borderRadius: '4px', // Mais quadrado, estilo trailer/carrinho
    margin: '10px',
    textAlign: 'left'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  content: { padding: '10px' },
  title: { fontSize: '1.1rem', margin: '5px 0', color: '#333' },
  description: { fontSize: '0.85rem', color: '#666', marginBottom: '10px' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontWeight: 'bold', color: '#e53935' }, // Vermelho para destacar (como as cadeiras)
  button: {
    backgroundColor: '#4CAF50', // Verde (como o guarda-sol)
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '2px'
  }
};

export default CoffeeCard;
