import React from 'react';
import imagemHome from '../assets/Bia.Cafe.png'; 

const Home = () => {
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Bem-vindo ao Cafezinho da Bia</h1>
          <p style={subtitleStyle}>Onde o movimento da rua encontra<br/>ótima música e um bom café.</p>
        </div>
      </div>
    </div>
  );
};

const sectionStyle = { 
  width: '100%', 
  backgroundColor: '#08060d', 
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  padding: '0'
};

const containerStyle = { 
  width: '100%', 
  maxWidth: '1200px',
  // A altura e a proporção ficam apenas aqui na imagem
  height: 'auto',
  aspectRatio: '17/9', 
  minHeight: '80vh', // Altura mínima para não esmagar o texto no zoom
  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imagemHome})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'center',
  overflow: 'hidden',
  borderRadius: '0 0 15px 15px'
};

const contentStyle = { 
  width: '90%', // Ocupa 90% da largura da imagem
  maxWidth: '800px',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // REMOVIDO: height, aspectRatio e objectFit daqui
};

const titleStyle = { 
  color: '#fff', 
  // CORREÇÃO: clamp(mínimo, preferido, máximo) substitui minFontSize/maxFontSize
  fontSize: 'clamp(28px, 4.5vw, 56px)', 
  fontWeight: 'bold', 
  textShadow: '2px 2px 10px rgba(0,0,0,0.8)', 
  marginBottom: '1px', 
  lineHeight: '1.2'
};

const subtitleStyle = { 
  color: '#eee', 
  fontSize: 'clamp(20px, 2.4vw, 60px)', 
  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
  maxWidth: '80%', 
  lineHeight: '1.1'
};


export default Home;
