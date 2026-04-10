import React from 'react';
import imagemHome from '../assets/Bia.Cafe.png'; 

const Home = () => {
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

const isMobile = window.innerWidth <= 768;

const containerStyle = { 
  width: '100%', 
  height: isMobile ? '50vh' : '85vh', 
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imagemHome})`,
  backgroundSize: 'cover',   
  backgroundPosition: isMobile ? '70% center' : 'center', 
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',
  textAlign: 'center',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  boxSizing: 'border-box'
};

const contentStyle = { 
  maxWidth: '900px',
  marginTop: isMobile ? '-20px' : '0'
};

const titleStyle = { 
  color: '#fff', 
  fontSize: 'clamp(26px, 5vw, 56px)', 
  fontWeight: 'bold', 
  textShadow: '2px 2px 10px rgba(0,0,0,0.8)', 
  marginBottom: '20px', 
  lineHeight: '1.2'
};

const subtitleStyle = { 
  color: '#eee', 
  fontSize: 'clamp(18px, 2.5vw, 28px)', 
  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
  lineHeight: '1.4'
};

export default Home;
