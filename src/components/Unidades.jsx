const Unidades = () => {
  const mapaLink = "https://maps.app.goo.gl/RToUpURxSzeFseTx7";

  return (
    <section id="unidades" style={sectionStyle}>
      <h2 style={titleStyle}>Nossa Unidade</h2>

      <div style={cardStyle}>
        <div style={iconStyle}>📍</div>

        <h3 style={cityStyle}>Cidade Nova - RJ</h3>

        <p style={addressStyle}>
          R. Laura de Araújo<br />
          Rio de Janeiro - RJ
        </p>

        <a
          href={mapaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Ver no mapa
        </a>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '80px 20px',
  backgroundColor: '#08060d', // 🔥 alinhado com seu site
  textAlign: 'center'
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '30px',
  color: '#fff'
};

const cardStyle = {
  maxWidth: '350px',
  margin: '0 auto',
  padding: '30px',
  backgroundColor: '#141414',
  borderRadius: '12px',
  border: '1px solid #222'
};

const iconStyle = {
  fontSize: '36px',
  marginBottom: '10px'
};

const cityStyle = {
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#fff'
};

const addressStyle = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '20px'
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#c59d5f',
  color: '#000',
  padding: '10px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: '600'
};

export default Unidades;