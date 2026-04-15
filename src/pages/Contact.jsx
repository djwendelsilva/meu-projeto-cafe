import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.whatsapp || !formData.message) {
      setStatus('error')
      return
    }

    const mensagem = `Olá! Vim pelo site ☕
Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}

Pedido:
${formData.message}`

    const numero = '5521991902018'
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(url, '_blank')

    setStatus('success')

    setFormData({
      name: '',
      whatsapp: '',
      message: '',
    })

    setTimeout(() => setStatus(''), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Faça seu Pedido</h2>

        <p className="contact-subtitle">
          Mande sua lista de delícias e Bia prepara para você!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            className="contact-input"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            className="contact-input"
            type="tel"
            placeholder="WhatsApp com DDD"
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
          />

          <textarea
            className="contact-textarea"
            placeholder="Descreva seu pedido..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button type="submit" className="contact-button">
            Enviar Pedido
          </button>
        </form>

        <div className="contact-status">
          {status === 'error' && (
            <p className="contact-status-error">Preencha todos os campos.</p>
          )}
          {status === 'success' && (
            <p className="contact-status-success">
              Pedido enviado com sucesso.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact