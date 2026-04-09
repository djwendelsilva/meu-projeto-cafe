import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Cafezinho da Bia</div>

      <ul style={ulStyle}>
        <li><Link smooth to="#features" style={linkStyle}>Cardápio</Link></li>
        <li><Link smooth to="#features" style={linkStyle}>Unidade</Link></li>
        <li><Link smooth to="#contact" style={linkStyle}>Contato</Link></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 60px',
  background: '#ffffff',
  height: '80px',
  borderBottom: '1px solid #f0f0f0',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const logoStyle = { fontSize: '22px', fontWeight: '800', color: '#000000', letterSpacing: '-1px' };
const ulStyle = { display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 };
const linkStyle = { textDecoration: 'none', color: '#333333', fontSize: '15px', fontWeight: '600' };

export default Navbar;
