import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setFormData({ name: '', whatsapp: '', message: '' }); 
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: '#fff', fontSize: '28px', marginBottom: '8px' }}>Faça seu Pedido</h2>
        <p style={{ color: '#ccc', marginBottom: '20px', fontSize: '14px' }}>Mande sua lista de delícias e Bia prepara para você!</p>
        
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
            type="tel" 
            placeholder="Seu WhatsApp" 
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
          <textarea 
            style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
            placeholder="Descreva seu pedido aqui..." 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit" style={buttonStyle}>
            Enviar Pedido
          </button>
        </form>

        <div style={{ marginTop: '15px', minHeight: '20px' }}>
          {status === 'error' && <p style={{ color: '#ff4d4d', fontSize: '14px' }}>⚠️ Preencha todos os campos!</p>}
          {status === 'success' && <p style={{ color: '#2ecc71', fontSize: '14px' }}>✅ Pedido enviado com sucesso!</p>}
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS AJUSTADOS PARA MENOR ALTURA ---
const sectionStyle = { 
  width: '100%', 
  backgroundColor: '#08060d', 
  display: 'flex', 
  justifyContent: 'center', 
  padding: '30px 0' // ALTURA REDUZIDA
};

const containerStyle = { 
  width: '100%', 
  maxWidth: '1126px', 
  padding: '0 20px', 
  textAlign: 'center', 
  boxSizing: 'border-box' 
};

const formStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '12px', 
  maxWidth: '450px', 
  margin: '0 auto' 
};

const inputStyle = { 
  padding: '10px 15px', 
  borderRadius: '8px', 
  border: '1px solid #333', 
  background: '#1a1a1a', 
  color: '#fff', 
  fontSize: '15px', 
  outline: 'none' 
};

const buttonStyle = { 
  background: '#fff', 
  color: '#000', 
  border: 'none', 
  padding: '12px', 
  borderRadius: '8px', 
  cursor: 'pointer', 
  fontWeight: '700', 
  fontSize: '15px', 
  marginTop: '5px' 
};

// ESTA LINHA É A QUE RESOLVE O SEU ERRO:
export default Contact;
