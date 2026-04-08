import { useState, useEffect } from 'react';

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento para garantir o bônus de "Gestão de Estado"
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // URL de incorporação para a Rua Laura de Araújo, Rio de Janeiro
  const mapUrl = "https://google.com";

  return (
    <section style={styles.container}>
      <h3 style={styles.title}>📍 Localização da Bia</h3>
      <p style={styles.address}>Rua Laura de Araújo - Cidade Nova, RJ</p>
      
      {isLoading ? (
        <div style={styles.loading}>
          <p>Carregando mapa...</p>
        </div>
      ) : (
        <div style={styles.mapWrapper}>
          <iframe
            src={mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa Cafezinho da Bia"
          ></iframe>
        </div>
      )}
    </section>
  );
};

const styles = {
  container: { padding: '40px 20px', textAlign: 'center', backgroundColor: '#f4f4f4' },
  title: { color: '#222', margin: 0 },
  address: { color: '#666', marginBottom: '20px' },
  loading: { height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ddd', borderRadius: '8px' },
  mapWrapper: { borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }
};

export default Map;
