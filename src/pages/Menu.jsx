import React from 'react';
import imgCardapio from '../assets/cardapio.png';

const Menu = () => {
  return (
    <div style={sectionStyle} id="cardapio">
      <div style={containerStyle}>
        <h2 style={titleStyle}>Nosso Cardápio</h2>
        <p style={subtitleStyle}>Escolha suas delícias favoritas!</p>
        
        <div style={bannerStyle}>
          <img src={imgCardapio} alt="Cardápio Bia Café" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

const sectionStyle = { 
  width: '100%', 
  backgroundColor: '#08060d', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
  minHeight: 'auto',  
  padding: '60px 0', 
  overflow: 'hidden',
  boxSizing: 'border-box',
  scrollMarginTop: '80px'
};

const containerStyle = { 
  width: '100%', 
  maxWidth: '1400px', 
  padding: '0 20px', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  transform: 'translateY(-20px)'
};

const bannerStyle = {
  width: '100%',
  maxWidth: '1100px', 
  margin: '0 auto',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
};

const titleStyle = { 
  color: '#fff', 
  fontSize: '28px',       // Diminuí levemente a fonte
  margin: '0 0 5px 0'     // Removi margens desnecessárias
};

const subtitleStyle = { 
  color: '#ccc', 
  fontSize: '16px', 
  margin: '0 0 20px 0'    // Espaço pequeno antes da imagem
};

const imageStyle = { 
  width: '100%', 
  maxHeight: '60vh', 
  objectFit: 'contain', 
  height: 'auto', 
  display: 'block' 
};

export default Menu;
