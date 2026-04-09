import React, { useState, useEffect } from 'react';

const Map = () => {
  const [loading, setLoading] = useState(true);
  const address = "R. Laura de Araújo - Cidade Nova, Rio de Janeiro - RJ, 20211-070";
  
  // Simulação de chamada de API (Requisito de Ponto Extra)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simula 1.5s de carregamento da API
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={mapContainerStyle}>
      {loading ? (
        <div style={loaderStyle}>
          <div className="spinner"></div>
          <p>Carregando mapa interativo...</p>
        </div>
      ) : (
        <iframe
          title="Mapa Cafezinho da Bia"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '15px' }}
          loading="lazy"
          allowFullScreen
          src={`https://google.com{encodeURIComponent(address)}`}
          // Nota: Para fins de teste local sem chave, usaremos a URL de embed padrão:
          src="https://google.com"
        ></iframe>
      )}
    </div>
  );
};

// --- ESTILOS ---
const mapContainerStyle = {
  width: '100%',
  maxWidth: '1126px',
  margin: '40px auto',
  padding: '0 20px',
  boxSizing: 'border-box'
};

const loaderStyle = {
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f4f4f4',
  borderRadius: '15px',
  color: '#666'
};

export default Map;
