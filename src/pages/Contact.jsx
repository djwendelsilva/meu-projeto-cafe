import { useState } from 'react';
import Map from '../components/Map'; 

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
    <div style={sectionStyle} id="contact">
      <div style={containerStyle}>
       <h2 style={titleStyle}>Faça seu Pedido</h2>
        <p style={{ color: '#ccc', marginBottom: '30px', fontSize: '18px' }}>Mande sua lista de delícias e Bia prepara para você!</p>
        
        <div style={contentFlexStyle}>
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
              style={textareaStyle}
              placeholder="Descreva seu pedido aqui..." 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" style={buttonStyle}>
              Enviar Pedido
            </button>
          </form>

          <div style={mapWrapperStyle}>
            <Map />
          </div>
        </div>

        <div style={{ marginTop: '20px', minHeight: '30px' }}>
          {status === 'error' && <p style={{ color: '#ff4d4d' }}>⚠️ Preencha todos os campos!</p>}
          {status === 'success' && <p style={{ color: '#2ecc71' }}>✅ Pedido enviado com sucesso!</p>}
        </div>
      </div>
    </div>
  );
};

const titleStyle = {
  color: '#fff', 
  fontSize: '32px', 
  marginBottom: '15px'
};

const sectionStyle = { 
  width: '100%', 
  backgroundColor: '#08060d', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',     
  padding: '60px 0', // Aumentei a base para o rodapé ficar bem longe
  margin: '0',
  boxSizing: 'border-box',
  scrollMarginTop: '80px', 
  minHeight: 'auto',
  justifyContent: 'center'
};

const containerStyle = { 
  width: '100%', 
  maxWidth: '1400px', // Aumentado para alinhar com o Cardápio novo
  padding: '0 20px', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box' 
};

const contentFlexStyle = {
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: '60px', // Mais espaço entre mapa e formulário
  flexWrap: 'wrap',
  width: '100%'
};

const formStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '15px',
  width: '100%',
  maxWidth: '350px', // Aumentado para preencher melhor a tela
  height: '350px',   // Altura maior para ser imponente
  boxSizing: 'border-box',
  textAlign: 'left'
};

const mapWrapperStyle = {
  width: '100%',
  maxWidth: '350px', // Mesma largura do formulário
  height: '350px',   // Mesma altura do formulário
  borderRadius: '20px',
  overflow: 'hidden',
  flexShrink: '0',
  border: '1px solid #333',
  boxShadow: '0 20px 50px rgba(0,0,0,0.7)' 
};

const inputStyle = { 
  padding: '12px 10px', // Inputs mais altos e confortáveis
  borderRadius: '12px', 
  border: '1px solid #333', 
  background: '#1a1a1a', 
  color: '#fff', 
  fontSize: '14.5px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};

const textareaStyle = {
  ...inputStyle,
  flex: '1',
  resize: 'none'
};

const buttonStyle = { 
  background: '#fff', 
  color: '#000', 
  border: 'none', 
  padding: '18px', 
  borderRadius: '12px', 
  cursor: 'pointer', 
  fontWeight: '800',
  fontSize: '17px',
  marginTop: '10px',
  transition: '0.3s'
};

export default Contact;
