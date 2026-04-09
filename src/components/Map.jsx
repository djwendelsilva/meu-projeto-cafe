import React, { useState, useEffect } from 'react';

const Map = () => {
  const [loading, setLoading] = useState(true);

  // Esta é a URL exata de incorporação (embed) que o Google permite exibir
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.5098774649305!2d-43.203294125530974!3d-22.90994603798238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fc6f2d7f4e9%3A0xc53d00005ed910f4!2sCaf%C3%A9zinho%20da%20Bia.!5e1!3m2!1spt-BR!2sbr!4v1775700448934!5m2!1spt-BR!2sbr";

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={mapFullWidthWrapper}>
      {loading ? (
        <div style={loaderStyle}>
          <div className="spinner"></div>
          <p style={{color: '#666', marginTop: '10px'}}>Localizando o Cafézinho da Bia...</p>
        </div>
      ) : (
        <iframe
          title="Mapa Cafezinho da Bia"
          src={googleMapsEmbedUrl}
          width="100%"
          height="350"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

// --- ESTILOS PARA LARGURA TOTAL (FULL WIDTH) ---
const mapFullWidthWrapper = {
  width: '100vw',         // Ocupa 100% da largura da janela
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',    // Técnica para expandir além do container de 1126px
  marginRight: '-50vw',
  padding: 0,
  lineHeight: 0,
  marginTop: '40px',
  overflow: 'hidden'
};

const loaderStyle = {
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f9f9f9',
  width: '100vw'
};

export default Map;
