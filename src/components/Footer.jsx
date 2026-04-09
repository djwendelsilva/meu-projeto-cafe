import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© 2026 - Todos os direitos reservados</p>
        <p>Desenvolvido por: <strong>Wendel Silva</strong></p>
        <a href="mailto:djwendelrj@gmail.com" style={{color: 'var(--accent)', textDecoration: 'none'}}>
          djwendelrj@gmail.com
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  width: '100%',
  borderTop: '1px solid #f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0'
};

const containerStyle = {
  width: '100%',
  maxWidth: '1126px', // LARGURA PADRÃO
  padding: '0 20px',    // PADDING PADRÃO
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  textAlign: 'center',
  boxSizing: 'border-box'
};

export default Footer;
