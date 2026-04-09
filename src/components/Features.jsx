import React from 'react';

// Sub-componente que recebe PROPS (Requisito 2)
const CoffeeCard = ({ icon, title, desc, link }) => (
  <div style={itemStyle}>
    <div style={iconCircleStyle}>{icon}</div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" style={linkTitleStyle}>{title}</a>
    ) : (
      <h3 style={titleStyle}>{title}</h3>
    )}
    <p style={descStyle}>{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        {/* Passando dados via PROPS */}
        <CoffeeCard 
          icon="📖" 
          title="Cardápio" 
          desc="Confira nossas delícias e cafés artesanais." 
        />
        <CoffeeCard 
          icon="❤️" 
          title="Feito com Carinho" 
          desc="Preparada artesanalmente por baristas experientes." 
        />
        <CoffeeCard 
          icon="📍" 
          title="Unidade" 
          desc="R. Laura de Araújo - Cidade Nova, RJ." 
          link="https://goo.gl"
        />
      </div>
    </section>
  );
};

// ... (mantenha os estilos que já tínhamos no Features.jsx)
const sectionStyle = { width: '100%', display: 'flex', justifyContent: 'center', padding: '80px 0', background: '#ffffff' };
const gridStyle = { width: '100%', maxWidth: '1126px', padding: '0 20px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', boxSizing: 'border-box' };
const itemStyle = { flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' };
const iconCircleStyle = { width: '60px', height: '60px', backgroundColor: '#08060d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px', color: '#fff' };
const titleStyle = { fontSize: '20px', fontWeight: '700', color: '#08060d', margin: '0 0 10px 0' };
const linkTitleStyle = { ...titleStyle, textDecoration: 'none', display: 'block', cursor: 'pointer' };
const descStyle = { fontSize: '14px', color: '#6b6375', lineHeight: '1.6', maxWidth: '220px' };

export default Features;
