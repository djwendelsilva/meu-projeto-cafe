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
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  return (
    <section id="contato" style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Entre em Contato</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Seu Nome" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Seu E-mail" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea 
          placeholder="Sua Mensagem" 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit" style={{ background: '#3e2723', color: 'white', border: 'none', padding: '10px' }}>
          Enviar
        </button>
      </form>

      {/* Mensagens de feedback */}
      {status === 'error' && <p style={{ color: 'red' }}>Por favor, preencha todos os campos!</p>}
      {status === 'success' && <p style={{ color: 'green' }}>Mensagem enviada com sucesso!</p>}
    </section>
  );
};

export default Contact;
