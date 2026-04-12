import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo.png';

const isMobile = window.innerWidth <= 768;

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link smooth to="#home" style={logoLinkStyle}>
          <div style={brandStyle}>
            <img src={logo} alt="Cafezinho da Bia" style={logoStyle} />
            <span style={logoTextStyle}>Cafezinho da Bia</span>
          </div>
        </Link>

        <nav>
          <ul style={navListStyle}>
            <li>
              <Link smooth to="#features" style={linkStyle}>
                Unidade
              </Link>
            </li>
            <li>
              <Link smooth to="#cardapio" style={linkStyle}>
                Cardápio
              </Link>
            </li>
            <li>
              <Link smooth to="#contact" style={linkStyle}>
                Pedidos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  height: isMobile ? '70px' : '80px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  width: '100%',
  backgroundColor: '#08060d',
  borderBottom: '1px solid #1f1f1f',
};

const containerStyle = {
  maxWidth: '1126px',
  height: '100%',
  margin: '0 auto',
  padding: isMobile ? '10px 14px' : '12px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoLinkStyle = {
  textDecoration: 'none',
  display: 'inline-block',
};

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: isMobile ? '8px' : '10px',
};

const logoStyle = {
  height: isMobile ? '34px' : '70px',
  width: 'auto',
  display: 'block',
};

const logoTextStyle = {
  color: '#fff',
  fontSize: isMobile ? '14px' : '18px',
  fontWeight: '600',
  lineHeight: 1,
  letterSpacing: '0.3px',
};

const navListStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: isMobile ? '10px' : '20px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  flexWrap: isMobile ? 'wrap' : 'nowrap',
  justifyContent: 'flex-end',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: isMobile ? '13px' : '16px',
  fontWeight: '600',
  letterSpacing: '0.3px',
};

export default Header;