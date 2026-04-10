import React from 'react';
import imagemHome from '../assets/Bia.Cafe.png'; 

const Home = () => {
    const isMobile = window.innerWidth <= 768;
  return (
    <div style={containerStyle} id="home">
      <div style={contentStyle}>
        <h1 style={titleStyle}>Bem-vindo ao Cafezinho da Bia</h1>
        <p style={subtitleStyle}>
          Onde o movimento da rua encontra<br/>ótima música e um bom café.
        </p>
      </div>
    </div>
  );
};

const containerStyle = { 
  width: '100%', 
  height: '65vh', // Ocupa 80% da altura da tela (ajusta no celular e PC)
  height: isMobile ? '60vh' : '80vh', 
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imagemHome})`,
  backgroundSize: 'cover',   // Faz a imagem cobrir todo o espaço sem achatar
  backgroundPosition: 'center', // Mantém o carrinho/centro visível
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centraliza o texto verticalmente na imagem
  alignItems: 'center',
  textAlign: 'center',
  margin: '0',
  padding: '0',
  overflow: 'hidden'
};

const contentStyle = { 
  width: '90%',
  maxWidth: '900px',
  padding: '20px'
};

const titleStyle = { 
  color: '#fff', 
  fontSize: 'clamp(26px, 5vw, 56px)', // Tamanho dinâmico para celular/PC
  fontWeight: 'bold', 
  textShadow: '2px 2px 10px rgba(0,0,0,0.8)', 
  marginBottom: '20px', 
  lineHeight: '1.2'
};

const subtitleStyle = { 
  color: '#eee', 
  fontSize: 'clamp(18px, 2.5vw, 28px)', // Ajustado para não ficar gigante no PC
  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
  lineHeight: '1.4'
};

export default Home;
