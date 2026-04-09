import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', message: '' }); // Trocado email por whatsapp
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.message) {
      setStatus('error');
      return;
    }
    
    // Log para você ver os dados no console
    console.log("Pedido recebido:", formData);
    
    setStatus('success');
    setFormData({ name: '', whatsapp: '', message: '' }); 
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: '#fff', fontSize: '32px', marginBottom: '10px' }}>Faça seu Pedido</h2>
        <p style={{ color: '#ccc', marginBottom: '30px' }}>Mande sua lista de delícias e Bia prepara para você!</p>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <input 
            style={inputStyle}
            type="text" 
            placeholder="Seu Nome" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          
          {/* Campo de WhatsApp atualizado */}
          <input 
            style={inputStyle}
            type="tel" 
            placeholder="Seu WhatsApp (ex: 21 99999-9999)" 
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
          
          <textarea 
            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
            placeholder="Descreva seu pedido aqui (ex: 2 Capuccinos, 1 Pão de Queijo...)" 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          
          <button type="submit" style={buttonStyle}>
            Enviar Pedido
          </button>
        </form>

        <div style={{ marginTop: '20px', minHeight: '24px' }}>
          {status === 'error' && <p style={{ color: '#ff4d4d' }}>⚠️ Preencha todos os campos!</p>}
          {status === 'success' && <p style={{ color: '#2ecc71' }}>✅ Pedido enviado com sucesso!</p>}
        </div>
      </div>
    </div>
  );
};

// --- ESTILOS MANTIDOS ---
const sectionStyle = { width: '100%', backgroundColor: '#08060d', display: 'flex', justifyContent: 'center', padding: '80px 0' };
const containerStyle = { width: '100%', maxWidth: '1126px', padding: '0 20px', textAlign: 'center', boxSizing: 'border-box' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '0 auto' };
const inputStyle = { padding: '15px', borderRadius: '8px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: '16px', outline: 'none' };
const buttonStyle = { background: '#fff', color: '#000', border: 'none', padding: '15px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '16px', marginTop: '10px' };

export default Contact;
