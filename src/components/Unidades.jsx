import React from 'react';

const Unidades = () => {
  // Link do Google Maps que você enviou
  const mapaLink = "https://google.com";

  return (
    /* O id="unidades" é o que faz o link da Navbar funcionar */
    <section id="unidades" style={sectionStyle}>
      <h2 style={titleStyle}>Nossas Unidades</h2>
      
      <div style={cardStyle}>
        <div style={iconStyle}>📍</div>
        <h3 style={cityStyle}>Vila Mariana</h3>
        <p style={addressStyle}>Rua Joaquim Távora, 1102<br/>Vila Mariana, São Paulo - SP</p>
        
        <a 
          href={mapaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.background = '#333'}
          onMouseOut={(e) => e.target.style.background = '#000'}
        >
          Ver no Google Maps
        </a>
      </div>
    </section>
  );
};

// --- ESTILOS ---
const sectionStyle = {
  padding: '100px 20px',
  backgroundColor: '#fdfdfd',
  textAlign: 'center',
  borderTop: '1px solid #eee'
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: '800',
  marginBottom: '40px',
  color: '#000'
};

const cardStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '40px',
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  border: '1px solid #f0f0f0'
};

const iconStyle = { fontSize: '40px', marginBottom: '15px' };

const cityStyle = { fontSize: '22px', fontWeight: '700', marginBottom: '10px' };

const addressStyle = {
  fontSize: '16px',
  color: '#666',
  lineHeight: '1.5',
  marginBottom: '25px'
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#000',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '14px',
  transition: 'background 0.3s'
};

export default Unidades;
