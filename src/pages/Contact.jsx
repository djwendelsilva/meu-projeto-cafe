import { useState } from 'react';
import Map from '../components/Map';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.whatsapp || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', whatsapp: '', message: '' });

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>

        <h2 style={titleStyle}>Faça seu Pedido</h2>

        <p style={subtitleStyle}>
          Mande sua lista de delícias e Bia prepara para você!
        </p>

        <div style={contentFlexStyle}>

          <form onSubmit={handleSubmit} style={formStyle}>

            <input
              style={inputStyle}
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              style={inputStyle}
              type="tel"
              placeholder="WhatsApp (com DDD)"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
            />

            <textarea
              style={textareaStyle}
              placeholder="Descreva seu pedido..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button type="submit" style={buttonStyle}>
              Enviar Pedido
            </button>

          </form>

          <div style={mapWrapperStyle}>
            <Map />
          </div>

        </div>

        <div style={statusStyle}>
          {status === 'error' && (
            <p style={{ color: '#ff4d4d' }}>
              ⚠️ Preencha todos os campos
            </p>
          )}

          {status === 'success' && (
            <p style={{ color: '#2ecc71' }}>
              ✅ Pedido enviado com sucesso!
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

const sectionStyle = {
  width: '100%',
  backgroundColor: '#08060d',
  padding: '60px 20px',
  display: 'flex',
  justifyContent: 'center'
};

const containerStyle = {
  width: '100%',
  maxWidth: '1200px',
  textAlign: 'center'
};

const contentFlexStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap',
  marginTop: '30px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  maxWidth: '350px'
};

const mapWrapperStyle = {
  width: '100%',
  maxWidth: '350px',
  height: '300px', // 🔥 removi altura exagerada
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid #333'
};

const inputStyle = {
  padding: '12px',
  borderRadius: '10px',
  border: '1px solid #333',
  background: '#1a1a1a',
  color: '#fff'
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '100px'
};

const buttonStyle = {
  background: '#c59d5f',
  color: '#000',
  border: 'none',
  padding: '14px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: '700'
};

const titleStyle = {
  color: '#fff',
  fontSize: '28px'
};

const subtitleStyle = {
  color: '#ccc',
  marginTop: '10px'
};

const statusStyle = {
  marginTop: '20px',
  minHeight: '24px'
};

export default Contact;