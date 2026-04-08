import { useState } from 'react';

const Contact = () => {
  // Estados para o formulário
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação Básica (Requisito 3)
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // Simulação de Envio bem-sucedido
    console.log("Dados capturados:", formData);
    setStatus('success');
    
    // Limpa o formulário e o status de erro após sucesso
    setFormData({ name: '', email: '', message: '' }); 
    setTimeout(() => setStatus(''), 5000); // Remove a mensagem de sucesso após 5 segundos
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '500px', 
      margin: '0 auto',
      textAlign: 'center' 
    }}>
      <h2>Entre em Contato</h2>
      <p style={{ marginBottom: '24px' }}>Dúvidas ou sugestões? Mande uma mensagem para Bia!</p>
      
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px' 
      }}>
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
        <button 
          type="submit" 
          style={{ 
            background: 'var(--accent)', 
            color: 'white', 
            border: 'none', 
            padding: '12px', 
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '8px',
            transition: 'opacity 0.3s'
          }}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          Enviar Mensagem
        </button>
      </form>

      {/* Mensagens de feedback */}
      <div style={{ marginTop: '20px', minHeight: '24px' }}>
        {status === 'error' && (
          <p style={{ color: '#ff4d4d', fontWeight: '500' }}>
            ⚠️ Por favor, preencha todos os campos!
          </p>
        )}
        {status === 'success' && (
          <p style={{ color: '#2ecc71', fontWeight: '500' }}>
            ✅ Mensagem enviada com sucesso!
          </p>
        )}
      </div>
    </div>
  );
};

// Objeto de estilo para os inputs para manter o código limpo
const inputStyle = {
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--text-h)',
  fontSize: '16px',
  fontFamily: 'inherit'
};

export default Contact;
