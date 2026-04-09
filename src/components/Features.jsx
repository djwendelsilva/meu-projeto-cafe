import React from 'react';

const Features = () => {
  const mapaLink = "https://google.com";

  return (
    <section style={sectionStyle}>
      <div style={gridStyle}>
        
        {/* Item 1 - Cardápio */}
        <div style={itemStyle}>
          <div style={iconCircleStyle}>📖</div>
          <h3 style={titleStyle}>Cardápio</h3>
          <p style={descStyle}>Confira nossas delícias, cafés artesanais e acompanhamentos exclusivos.</p>
        </div>

        {/* Item 2 - Carinho */}
        <div style={itemStyle}>
          <div style={iconCircleStyle}>❤️</div>
          <h3 style={titleStyle}>Feito com Carinho</h3>
          <p style={descStyle}>Cada bebida é preparada artesanalmente por baristas experientes.</p>
        </div>

        {/* Item 3 - Unidade com link do Maps RJ */}
        <div style={itemStyle}>
          <div style={iconCircleStyle}>📍</div>
          <a 
            href={mapaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkTitleStyle}
            onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
            onMouseOut={(e) => e.target.style.color = '#08060d'}
          >
            Unidade
          </a>
          <p style={descStyle}>R. Laura de Araújo - Cidade Nova, Rio de Janeiro. Clique para ver o mapa.</p>
        </div>

      </div>
    </section>
  );
};

const sectionStyle = { padding: '80px 20px', background: '#ffffff' };
const gridStyle = { display: 'flex', justifyContent: 'center', gap: '40px', maxWidth: '1100px', margin: '0 auto', flexWrap: 'wrap' };
const itemStyle = { flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' };
const iconCircleStyle = { width: '60px', height: '60px', backgroundColor: '#08060d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px', color: '#fff' };
const titleStyle = { fontSize: '20px', fontWeight: '700', color: '#08060d', margin: '0 0 10px 0' };
const linkTitleStyle = { ...titleStyle, textDecoration: 'none', display: 'block', cursor: 'pointer', transition: 'color 0.3s' };
const descStyle = { fontSize: '14px', color: '#6b6375', lineHeight: '1.6', maxWidth: '220px' };

export default Features;
