const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyStyle}>© 2026 - Todos os direitos reservados</p>

        <p style={devStyle}>
          Desenvolvido por: <strong>Wendel Silva</strong>
        </p>

        <a href="mailto:djwendelrj@gmail.com" style={emailStyle}>
          djwendelrj@gmail.com
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  width: '100%',
  backgroundColor: '#111', // 🔥 mais alinhado com seu site escuro
  padding: '20px 0',
  borderTop: '1px solid #222',
};

const containerStyle = {
  maxWidth: '1126px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center'
};

const copyStyle = {
  fontSize: '14px',
  color: '#aaa',
  margin: 0
};

const devStyle = {
  fontSize: '15px',
  color: '#ddd',
  margin: 0
};

const emailStyle = {
  fontSize: '14px',
  color: '#c59d5f', // 🔥 padrão do seu projeto
  textDecoration: 'none'
};

export default Footer;