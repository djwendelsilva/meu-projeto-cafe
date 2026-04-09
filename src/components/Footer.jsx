import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyStyle}>
          © 2026 - Todos os direitos reservados
        </p>
        <p style={devStyle}>
          Desenvolvido por: <strong>Wendel Silva</strong>
        </p>
        <a href="mailto:djwendelrj@gmail.com" style={emailStyle}>
          djwendelrj@gmail.com
        </a>
      </div>
    </footer>
  );
};

// --- ESTILOS ---
const footerStyle = {
  width: '100%',
  padding: '40px 0',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #f0f0f0',
  marginTop: 'auto' // Garante que ele fique no final se a página for curta
};

const containerStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  textAlign: 'center'
};

const copyStyle = {
  fontSize: '14px',
  color: '#999',
  margin: 0
};

const devStyle = {
  fontSize: '16px',
  color: '#333',
  margin: 0
};

const emailStyle = {
  fontSize: '14px',
  color: 'var(--accent)', // Usa a cor roxa que definimos no CSS
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'opacity 0.3s'
};

export default Footer;
