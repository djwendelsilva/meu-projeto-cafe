const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>☕ Grão & Código</div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#menu" style={styles.link}>Menu</a></li>
        <li><a href="#contato" style={styles.link}>Contato</a></li>
      </ul>
    </nav>
  );
};

// Estilização rápida para manter o código limpo (Requisito 4)
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    background: '#3e2723',
    color: 'white',
    height: '70px',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem'
  }
};

export default Navbar;
