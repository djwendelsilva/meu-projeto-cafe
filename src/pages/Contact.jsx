import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', email: '', message: '' }); 
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: '#fff', fontSize: '32px', marginBottom: '10px' }}>Entre em Contato</h2>
        <p style={{ color: '#ccc', marginBottom: '30px' }}>Dúvidas ou sugestões? Mande uma mensagem para Bia!</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <input 
            style={inputStyle}
            type="text" 
            placeholder="Seu Nome" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            style={inputStyle}
            type="email" 
            placeholder="Seu E-mail" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea 
            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
            placeholder="Sua Mensagem" 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit" style={buttonStyle}>
            Enviar Mensagem
          </button>
        </form>

        <div style={{ marginTop: '20px', minHeight: '24px' }}>
          {status === 'error' && <p style={{ color: '#ff4d4d' }}>⚠️ Preencha todos os campos!</p>}
          {status === 'success' && <p style={{ color: '#2ecc71' }}>✅ Mensagem enviada com sucesso!</p>}
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS PADRONIZADOS ---
const sectionStyle = {
  width: '100%',
  backgroundColor: '#08060d', // FUNDO PRETO
  display: 'flex',
  justifyContent: 'center',
  padding: '80px 0'
};

const containerStyle = {
  width: '100%',
  maxWidth: '1126px', // LARGURA PADRÃO
  padding: '0 20px',
  textAlign: 'center',
  boxSizing: 'border-box'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  maxWidth: '500px', // O formulário em si fica centralizado e menor
  margin: '0 auto'
};

const inputStyle = {
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #333',
  background: '#1a1a1a', // Input cinza muito escuro
  color: '#fff',         // Texto do input branco
  fontSize: '16px',
  outline: 'none'
};

const buttonStyle = {
  background: '#fff',    // Botão branco para contrastar com o fundo preto
  color: '#000',
  border: 'none',
  padding: '15px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '16px',
  marginTop: '10px',
  transition: 'transform 0.2s'
};

export default Contact;
