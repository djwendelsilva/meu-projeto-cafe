import { useState } from 'react';

const isMobile = window.innerWidth <= 768;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: '',
  });

  const [status, setStatus] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();

  // 🔥 validação
  if (!formData.name || !formData.whatsapp || !formData.message) {
    setStatus('error');
    return;
  }

  // 🔥 monta mensagem completa
  const mensagem = `
Olá! Vim pelo site ☕
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}

Pedido:
${formData.message}
  `;

  const numero = '5585999999999'; // 🔥 TROQUE PELO SEU

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // 🔥 abre WhatsApp
  window.open(url, '_blank');

  // 🔥 feedback para o usuário
  setStatus('success');

  // 🔥 limpa o formulário
  setFormData({
    name: '',
    whatsapp: '',
    message: '',
    });

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Faça seu Pedido</h2>

        <p style={subtitleStyle}>
          Mande sua lista de delícias e Bia prepara para você!
        </p>

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
            placeholder="WhatsApp com DDD"
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

        <div style={statusStyle}>
          {status === 'error' && (
            <p style={{ color: '#ff4d4d' }}>Preencha todos os campos.</p>
          )}
          {status === 'success' && (
            <p style={{ color: '#2ecc71' }}>Pedido enviado com sucesso.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();

  const mensagem = `Olá! Vim pelo site e gostaria de fazer um pedido no Cafezinho da Bia ☕`;

  const numero = '5521991902018'; // 🔥 TROQUE PELO SEU

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
};

const sectionStyle = {
  width: '100%',
  minHeight: 'calc(100vh - 80px)', // 🔥 ocupa a tela inteira
  backgroundColor: '#08060d',
  padding: '40px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // 🔥 igual ao Menu
  paddingTop: '80px'
};

const containerStyle = {
  width: '100%',
  maxWidth: isMobile ? '100%' : '700px',
  textAlign: 'center',
};

const titleStyle = {
  color: '#fff',
  fontSize: '32px',
  marginBottom: '12px',
};

const subtitleStyle = {
  color: '#ccc',
  marginBottom: '30px',
  fontSize: '18px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #333',
  background: '#1a1a1a',
  color: '#fff',
  fontSize: '15px',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'none',
};

const buttonStyle = {
  background: '#c59d5f',
  color: '#000',
  border: 'none',
  padding: '14px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '16px',
};

const statusStyle = {
  marginTop: '20px',
  minHeight: '24px',
};

export default Contact;