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
            Café quentinho para <br/> acompanhar seu caminho
          </h1>
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS PADRONIZADOS (1126px) ---
const sectionStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 0',
  background: '#ffffff'
};

const containerStyle = {
  position: 'relative', // Permite o texto flutuar sobre a imagem
  width: '100%',
  maxWidth: '1126px', // Alinhado com a Navbar e Footer
  height: '550px',
  margin: '0 20px',
  borderRadius: '20px',
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
  /* Escurece a imagem para as letras brancas saltarem */
  background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px'
};

const titleStyle = {
  /* Fonte responsiva: grande no PC, ajustada no celular */
  fontSize: 'clamp(28px, 5vw, 56px)', 
  fontWeight: '800',
  color: '#ffffff',
  margin: '0',
  lineHeight: '1.1',
  textShadow: '0px 4px 15px rgba(0, 0, 0, 0.9)', // Sombra forte para visibilidade total
  fontFamily: 'var(--heading)',
  letterSpacing: '-1.5px',
  maxWidth: '800px'
};

export default Home;
