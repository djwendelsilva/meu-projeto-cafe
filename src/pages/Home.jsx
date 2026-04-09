import React from 'react';
import fotoCafe from '../assets/bia.cafe.png'; 

const Home = () => {
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        {/* Imagem de Fundo */}
        <img 
          src={fotoCafe} 
          alt="Carrinho Cafezinho da Bia" 
          style={imageStyle} 
        />
        
        {/* Camada de Contraste e Texto Centralizado */}
        <div style={overlayStyle}>
          <h1 style={titleStyle}>
            Onde o movimento da rua <br/> encontra um som e um bom café
          </h1>
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS AJUSTADOS ---
const sectionStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 0 40px 0', // Mudei de '40px 0' para '0 0 40px 0' (topo zero)
  background: '#ffffff'
};

const containerStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '1126px',
  height: '550px',
  // Se quiser que a imagem encoste nas bordas laterais também, mude o 20px para 0
  margin: '0 20px', 
  borderRadius: '0 0 20px 20px', // Arredonda apenas os cantos de baixo para encaixar no topo
  overflow: 'hidden',
  boxShadow: 'var(--shadow)',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px'
};

const titleStyle = {
  fontSize: 'clamp(28px, 5vw, 56px)', 
  fontWeight: '800',
  color: '#ffffff',
  margin: '0',
  lineHeight: '1.1',
  textShadow: '0px 4px 15px rgba(0, 0, 0, 0.9)',
  fontFamily: 'var(--heading)',
  letterSpacing: '-1.5px',
  maxWidth: '800px'
};

export default Home;
