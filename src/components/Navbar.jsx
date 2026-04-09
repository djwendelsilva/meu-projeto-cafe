import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={innerNavStyle}>
        <div style={logoStyle}>Cafezinho da Bia</div>
        <ul style={ulStyle}>
          <li><Link smooth to="#features" style={linkStyle}>Cardápio</Link></li>
          <li><Link smooth to="#features" style={linkStyle}>Unidade</Link></li>
          {/* Trocado para Pedidos */}
          <li><Link smooth to="#contact" style={linkStyle}>Pedidos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const navStyle = {
  width: '100%',
  background: '#ffffff',
  borderBottom: '1px solid #f0f0f0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center'
};

const innerNavStyle = {
  width: '100%',
  maxWidth: '1126px',
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  boxSizing: 'border-box'
};

const logoStyle = { fontSize: '22px', fontWeight: '800', color: '#000000', letterSpacing: '-1px' };
const ulStyle = { display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 };
const linkStyle = { textDecoration: 'none', color: '#333333', fontSize: '15px', fontWeight: '600' };

export default Navbar;
