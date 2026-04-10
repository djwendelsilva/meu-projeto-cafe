import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CoffeeCard = ({ icon, title, desc, link, isHash }) => (
  <div style={itemStyle}>
    <div style={iconCircleStyle}>{icon}</div>
    {link ? (
      isHash ? (
        <Link smooth to={link} style={linkTitleStyle}>{title}</Link>
      ) : (
      <a href={link} target="_blank" rel="noopener noreferrer" style={linkTitleStyle}>{title}</a>)
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
          desc="Confira nossas delícias de café da manhã." 
          link="#cardapio" 
          isHash={true}    
        />
        <CoffeeCard 
          icon="❤️" 
          title="Feito com capricho" 
          desc="Tudo preparado com muito amor e carinho." 
        />
        <CoffeeCard 
          icon="📍" 
          title="Unidade" 
          desc="R. Laura de Araújo - Cidade Nova, Rio de Janeiro - RJ, 20211-070" 
          link="https://maps.app.goo.gl/RToUpURxSzeFseTx7"
        />
      </div>
    </section>
  );
};

const sectionStyle = { 
  width: '100%', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  minHeight: '400px',         
  background: '#08060d',   
  padding: '80px 0', 
  margin: '0',
  border: 'none'
};

const gridStyle = { 
  width: '100%', 
  maxWidth: '1126px',      
  paddingLeft: '20px',    // Usando nomes específicos para evitar o reset global
  paddingRight: '20px', 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '40px', 
  flexWrap: 'wrap', 
  boxSizing: 'border-box',
  alignItems: 'center',
  margin: '0 auto'
};

const itemStyle = { 
  flex: '1', 
  minWidth: '250px', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  textAlign: 'center' 
};

const iconCircleStyle = { 
  width: '70px',           // ÍCONE UM POUCO MAIOR
  height: '70px', 
  backgroundColor: '#fff', // ÍCONE BRANCO PARA CONTRASTAR COM FUNDO CINZA
  borderRadius: '50%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '28px', 
  marginBottom: '20px', 
  color: '#08060d' 
};

const titleStyle = { 
  fontSize: '22px', 
  fontWeight: '700', 
  color: '#fff',           // TÍTULO BRANCO PARA LER NO CINZA
  margin: '0 0 12px 0' 
};

const linkTitleStyle = { 
  ...titleStyle, 
  textDecoration: 'none', 
  display: 'block', 
  cursor: 'pointer' 
};

const descStyle = { 
  fontSize: '15px', 
  color: '#ccc',           // DESCRIÇÃO CLARA PARA LER NO CINZA
  lineHeight: '1.6', 
  maxWidth: '250px' 
};

export default Features;
