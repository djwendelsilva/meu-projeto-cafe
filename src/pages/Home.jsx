import imagemHome from '../assets/Bia.Cafe.png';
import imagemHome from '../assets/Bia.Cafe.png';
import imagemHomeMobile from '../assets/Bia.Cafe.mobile.png';

const isMobile = window.innerWidth <= 768;

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
    {isMobile && <img src={imagemHome} alt="" style={mobileImageStyle} />}

    <div style={overlayStyle}></div>

    <div style={innerStyle}>
      <div style={contentStyle}>
        <h1 style={{ ...titleStyle, ...fadeDown1 }}>
          Sejam bem-vindos ao
          <br />
          Cafezinho da Bia.
        </h1>

        <p style={{ ...subtitleStyle, ...fadeDown2 }}>
          Aqui o movimento da rua encontra
          <br />
          ótima música e um bom café.
        </p>

        <div style={{ ...buttonsWrapperStyle, ...fadeDown3 }}>
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
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',

  backgroundImage: `url(${isMobile ? imagemHomeMobile : imagemHome})`,
  backgroundSize: 'cover',
  backgroundPosition: isMobile ? 'center center' : '10% center',
  backgroundRepeat: 'no-repeat',
};

const innerStyle = {
  width: '100%',
  maxWidth: '1126px',
  margin: '0 auto',
  padding: isMobile ? '0 18px' : '0 20px',
  position: 'relative',
  zIndex: 2,
};

const contentStyle = {
  maxWidth: isMobile ? '100%' : '520px',
  textAlign: 'left',
   transform: 'translateY(-10px)',
};

const titleStyle = {
  color: '#fff',
  fontSize: isMobile ? 'clamp(26px, 8vw, 38px)' : 'clamp(32px, 4.5vw, 48px)',
  fontWeight: '700',
  marginBottom: '20px',
  lineHeight: '1.2',
  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
};

const subtitleStyle = {
  color: 'rgba(255,255,255,0.9)',
  fontSize: isMobile ? '18px' : 'clamp(18px, 2.5vw, 22px)',
  marginBottom: '30px',
  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
};

const buttonsWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  marginTop: '10px',
  transform: isMobile ? 'none' : 'translateX(5vw)', // 👈 seu ajuste mantido
};

const primaryButtonStyle = {
  padding: isMobile ? '10px 18px' : '12px 24px',
  backgroundColor: '#c59d5f',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  padding: isMobile ? '10px 18px' : '12px 24px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.5)',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
  backdropFilter: 'blur(4px)',
};

const fadeBase = {
  opacity: 0,
  animationName: 'fadeDown',
  animationDuration: '0.8s',
  animationTimingFunction: 'ease',
  animationFillMode: 'forwards',
};

const fadeDown1 = {
  ...fadeBase,
  animationDelay: '0.1s',
};

const fadeDown2 = {
  ...fadeBase,
  animationDelay: '0.35s',
};

const fadeDown3 = {
  opacity: 0,
  animationName: 'fadeOpacity',
  animationDuration: '0.8s',
  animationTimingFunction: 'ease',
  animationDelay: '0.6s',
  animationFillMode: 'forwards',
};

const mobileImageStyle = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover', // se quiser mostrar mais da arte, depois testamos 'contain'
  objectPosition: 'center center',
  zIndex: 0,
};

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  zIndex: 1,
};

export default Home;