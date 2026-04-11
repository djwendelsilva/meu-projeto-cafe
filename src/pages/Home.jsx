import imagemHome from '../assets/Bia.Cafe.png';

const Home = () => {
  const handleScrollToMenu = () => {
    const section = document.getElementById('cardapio');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={containerStyle} id="home">
      <div style={innerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>
            Sejam bem-vindos ao
            <br />
            Cafezinho da Bia.
          </h1>

          <p style={subtitleStyle}>
            Aqui o movimento da rua encontra
            <br />
            ótima música e um bom café.
          </p>

          <div style={buttonsWrapperStyle}>
            <button style={primaryButtonStyle} onClick={handleScrollToMenu}>
              Ver Cardápio
            </button>

            <button style={secondaryButtonStyle} onClick={handleScrollToContact}>
              Fazer Pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  width: '100%',
  minHeight: 'calc(100vh - 80px)',
  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imagemHome})`,
  backgroundSize: 'cover',
  backgroundPosition: 'left center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'flex-start',
  paddingTop: '120px',
};

const innerStyle = {
  width: '100%',
  maxWidth: '1126px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyle = {
  maxWidth: '520px',
  textAlign: 'left',
};

const titleStyle = {
  color: '#fff',
  fontSize: 'clamp(32px, 4.5vw, 48px)',
  fontWeight: '700',
  marginBottom: '20px',
  lineHeight: '1.2',
  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
};

const subtitleStyle = {
  color: 'rgba(255,255,255,0.9)',
  fontSize: 'clamp(18px, 2.5vw, 22px)',
  marginBottom: '30px',
  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
};

const buttonsWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '100px',
  gap: '12px',
  marginTop: '10px',
};

const primaryButtonStyle = {
  padding: '12px 24px',
  backgroundColor: '#c59d5f',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  padding: '12px 24px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.5)',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
  backdropFilter: 'blur(4px)',
};

export default Home;