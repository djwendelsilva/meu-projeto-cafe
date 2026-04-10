import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={innerNavStyle}>
        
        {/* Agora o nome é um link que volta para o topo (#home) */}
        <Link smooth to="#home" style={logoLinkStyle}>
          Cafezinho da Bia
        </Link>

        <ul style={ulStyle}>
          <li><Link smooth to="#cardapio" style={linkStyle}>Cardápio</Link></li>
          <li><Link smooth to="#features" style={linkStyle}>Unidade</Link></li>
          <li><Link smooth to="#contact" style={linkStyle}>Pedidos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// --- ESTILOS ---

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
  minHeight: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10 20px',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
  gap: '10px'
};

const ulStyle = { 
  display: 'flex', 
  gap: '15px',        // Diminuímos o espaço entre links (era 30px)
  listStyle: 'none', 
  margin: '0', 
  padding: '0',
  flexWrap: 'wrap',   // Permite que os links se organizem em duas linhas no celular
  justifyContent: 'center' 
};

// Estilo do Nome como Link (sem sublinhado)
const logoLinkStyle = { 
  fontSize: '20px', 
  fontWeight: '800', 
  color: '#000000', 
  letterSpacing: '-1px',
  textDecoration: 'none', // Remove o sublinhado padrão de link
  cursor: 'pointer'
};

const linkStyle = { textDecoration: 'none', color: '#333333', fontSize: '15px', fontWeight: '600' };

export default Navbar;
