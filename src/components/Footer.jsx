import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyStyle}>© 2026 - Todos os direitos reservados</p>
        <p style={devStyle}>Desenvolvido por: <strong style={{ color: '#010000' }}>Wendel Silva</strong></p>
        <a href="mailto:djwendelrj@gmail.com" style={emailStyle}>
          djwendelrj@gmail.com
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  width: '100%',           // Força a largura total da janela
  backgroundColor: '#f0f0f0', 
  padding: '4px 0',          
  textAlign: 'center',
  display: 'flex',          // Adicionado para garantir centralização
  justifyContent: 'center', // Adicionado
  marginTop: '20px',        
  borderTop: '1px solid f0f0f0',
  position: 'relative',     // Garante que ele siga o fluxo normal
  clear: 'both'             // Impede que ele suba para o lado de outros elementos
};

const containerStyle = {
  width: '100%',
  maxWidth: '1126px', 
  padding: '10px 10px',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  gap: '5px',
  textAlign: 'center'
};

const copyStyle = { fontSize: '14px', color: '#666', margin: 0 };
const devStyle = { fontSize: '16px', color: '#333', margin: 0 };
const emailStyle = { 
  fontSize: '14px', 
  color: '#000', 
  opacity: 0.8, 
  textDecoration: 'none',
  fontWeight: '500'
};

export default Footer;
