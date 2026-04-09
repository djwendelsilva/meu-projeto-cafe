import React from 'react';
import fotoCafe from '../assets/bia.cafe.png'; 

const Home = () => {
  return (
    <div style={sectionStyle}>
      <h1 style={titleStyle}>Cafezinho da Bia</h1>
      <div style={containerStyle}>
        <img src={fotoCafe} alt="Carrinho Cafezinho da Bia" style={imageStyle} />
      </div>
    </div>
  );
};

const sectionStyle = { padding: '40px 60px', textAlign: 'left', background: '#ffffff' };
const titleStyle = { fontSize: '48px', fontWeight: '800', color: '#000000', margin: '0 0 30px 0', letterSpacing: '-1.5px' };
const containerStyle = { width: '100%', maxWidth: '1200px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)' };
const imageStyle = { width: '100%', height: 'auto', display: 'block', objectFit: 'cover' };

export default Home;
