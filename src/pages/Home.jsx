import imagemHome from '../assets/Bia.Cafe.png';

const Home = () => {
  return (
    <section style={containerStyle} id="home">
      <div style={contentStyle}>
        <h1 style={titleStyle}>Bem-vindo ao Cafezinho da Bia</h1>

        <p style={subtitleStyle}>
          Onde o movimento da rua encontra<br />
          ótima música e um bom café.
        </p>

        <button style={buttonStyle}>
          Ver Cardápio
        </button>
      </div>
    </section>
  );
};

const containerStyle = {
  width: '100%',
  height: '85vh',
  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imagemHome})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const contentStyle = {
  maxWidth: '900px',
  padding: '20px',
};

const titleStyle = {
  color: '#fff',
  fontSize: 'clamp(32px, 5vw, 56px)',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: '1.2',
};

const subtitleStyle = {
  color: '#eee',
  fontSize: 'clamp(18px, 2.5vw, 26px)',
  marginBottom: '30px',
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  backgroundColor: '#c59d5f',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Home;