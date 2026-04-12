import { useState, useEffect } from 'react';
import imagemHome from '../assets/bia.cafe.png';
import imagemHomeMobile from '../assets/bia.cafe.mobile.png';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToMenu = () => {
    const section = document.getElementById('cardapio');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const containerStyle = {
    width: '100%',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${isMobile ? imagemHomeMobile : imagemHome})`,
    backgroundSize: isMobile ? 'cover' : 'cover',
    backgroundPosition: isMobile ? 'center bottom' : '10% center',
    backgroundRepeat: 'no-repeat',
  };

  const innerStyle = {
    width: '100%',
    maxWidth: '1126px',
    margin: '0 auto',
    padding: isMobile ? '0 18px' : '0 20px',
    zIndex: 2,
  };

   const contentStyle = {
     maxWidth: isMobile ? '90%' : '520px',
     margin: isMobile ? '0 auto' : '0',
     textAlign: isMobile ? 'center' : 'left',
     transform: isMobile ? 'translateY(-18vh)' : 'translateY(-10px)',
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
    marginBottom: isMobile ? '28px' : '30px',
    textShadow: '0 2px 10px rgba(0,0,0,0.6)',
  };

  const buttonsWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: isMobile ? 'center' : 'flex-start',
  gap: isMobile ? '12px' : '16px',
  marginTop: isMobile ? '10px' : '20px',
  transform: isMobile ? 'none' : 'translateX(5vw)',
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
  backgroundColor: '#25D366',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
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

  const handleWhatsApp = () => {
  const numero = '5585999999999'; // 🔥 coloque seu número real

  const mensagem = `Olá! Vim pelo site do Cafezinho da Bia ☕
Gostaria de fazer um pedido.

Nome:
Pedido:
Forma de pagamento:
Retirada ou entrega?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
};

  return (
    <section style={containerStyle} id="home">
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
              Fazer Pedido no WhasApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;