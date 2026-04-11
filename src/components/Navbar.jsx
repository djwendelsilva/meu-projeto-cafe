import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={innerNavStyle}>

        {/* Logo */}
        <Link smooth to="#home" style={logoLinkStyle}>
          Cafezinho da Bia
        </Link>

        {/* Menu */}
        <ul style={ulStyle}>
          <li>
            <Link smooth to="#cardapio" style={linkStyle}>
              Cardápio
            </Link>
          </li>

          <li>
            <Link smooth to="#features" style={linkStyle}>
              Unidade
            </Link>
          </li>

          <li>
            <Link smooth to="#contact" style={linkStyle}>
              Pedidos
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

const navStyle = {
  width: '100%',
  background: '#ffffff',
  borderBottom: '1px solid #eee',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const innerNavStyle = {
  maxWidth: '1126px',
  margin: '0 auto',
  minHeight: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px', // ✔ corrigido
  flexWrap: 'wrap'
};

const ulStyle = {
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
  margin: 0,
  padding: 0
};

const logoLinkStyle = {
  fontSize: '20px',
  fontWeight: '800',
  color: '#000',
  textDecoration: 'none'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '15px',
  fontWeight: '600'
};

export default Navbar;