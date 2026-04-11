import { HashLink as Link } from 'react-router-hash-link';

const featuresData = [
  {
    icon: "📖",
    title: "Cardápio",
    desc: "Confira nossas delícias de café da manhã.",
    link: "#cardapio",
    isHash: true
  },
  {
    icon: "❤️",
    title: "Feito com capricho",
    desc: "Tudo preparado com muito amor e carinho."
  },
  {
    icon: "📍",
    title: "Unidade",
    desc: "R. Laura de Araújo - Cidade Nova, Rio de Janeiro - RJ",
    link: "https://maps.app.goo.gl/RToUpURxSzeFseTx7"
  }
];

const CoffeeCard = ({ icon, title, desc, link, isHash }) => (
  <div style={itemStyle}>
    <div style={iconCircleStyle}>{icon}</div>

    {link ? (
      isHash ? (
        <Link smooth to={link} style={linkTitleStyle}>{title}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkTitleStyle}>{title}</a>
      )
    ) : (
      <h3 style={titleStyle}>{title}</h3>
    )}

    <p style={descStyle}>{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" style={sectionStyle}>
      <div style={gridStyle}>
        {featuresData.map((item) => (
          <CoffeeCard key={item.title} {...item} />
        ))}
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
  padding: '80px 20px'
};

const gridStyle = {
  width: '100%',
  maxWidth: '1126px',
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap'
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
  width: '70px',
  height: '70px',
  backgroundColor: '#fff',
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
  color: '#fff',
  marginBottom: '12px'
};

const linkTitleStyle = {
  ...titleStyle,
  textDecoration: 'none',
  cursor: 'pointer'
};

const descStyle = {
  fontSize: '15px',
  color: '#ccc',
  lineHeight: '1.6',
  maxWidth: '250px'
};

export default Features;