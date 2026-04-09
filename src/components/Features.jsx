import React from 'react';

const Features = () => {
  const mapaLink = "https://goo.gl";

  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        <div style={itemStyle}>
          <div style={iconCircleStyle}>📖</div>
          <h3 style={titleStyle}>Cardápio</h3>
          <p style={descStyle}>Confira nossas delícias e cafés artesanais.</p>
        </div>
        <div style={itemStyle}>
          <div style={iconCircleStyle}>❤️</div>
          <h3 style={titleStyle}>Feito com Carinho</h3>
          <p style={descStyle}>Preparada artesanalmente por baristas experientes.</p>
        </div>
        <div style={itemStyle}>
          <div style={iconCircleStyle}>📍</div>
          <a href={mapaLink} target="_blank" rel="noopener noreferrer" style={linkTitleStyle}>Unidade</a>
          <p style={descStyle}>R. Laura de Araújo - Cidade Nova, RJ.</p>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '80px 0',
  background: '#ffffff'
};

const gridStyle = {
  width: '100%',
  maxWidth: '1126px', // LARGURA PADRÃO
  padding: '0 20px',    // PADDING PADRÃO
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
  boxSizing: 'border-box'
};

// ... (mantenha os outros estilos auxiliares iconCircleStyle, titleStyle, etc. que já tínhamos)
const itemStyle = { flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' };
const iconCircleStyle = { width: '60px', height: '60px', backgroundColor: '#08060d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px', color: '#fff' };
const titleStyle = { fontSize: '20px', fontWeight: '700', color: '#08060d', margin: '0 0 10px 0' };
const linkTitleStyle = { ...titleStyle, textDecoration: 'none', display: 'block', cursor: 'pointer' };
const descStyle = { fontSize: '14px', color: '#6b6375', lineHeight: '1.6', maxWidth: '220px' };

export default Features;
