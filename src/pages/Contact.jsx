import { useState } from 'react'
import './Contact.css'

const whatsappNumber = '5521991902018'
const defaultWhatsappMessage =
  'Olá! Vim pelo site do Cafezinho da Bia e quero tirar uma dúvida.'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: '',
  })

  const [success, setSuccess] = useState(false)

  const whatsappMessage = encodeURIComponent(defaultWhatsappMessage)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleManualOrder = (event) => {
    event.preventDefault()

    const name = formData.name.trim()
    const phone = formData.phone.trim()
    const order = formData.order.trim()

    if (!name || !phone || !order) {
      alert('Preencha nome, WhatsApp e pedido.')
      return
    }

    const message = encodeURIComponent(
      `Olá! Quero fazer um pedido no Cafezinho da Bia.\n\n` +
        `Nome: ${name}\n` +
        `WhatsApp: ${phone}\n\n` +
        `Pedido:\n${order}`
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')

    // limpa os campos
    setFormData({
      name: '',
      phone: '',
      order: '',
    })

    // mostra mensagem de sucesso
    setSuccess(true)

    // opcional: esconder depois de 3 segundos
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-box card">
            <div className="contact-text">
              <span className="section-badge">Contato</span>
              <h2>Fale com a gente</h2>
              <p>
                Quer fazer pedido, tirar dúvida ou perguntar sobre horários? O
                caminho mais rápido continua sendo o WhatsApp.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Chamar no WhatsApp
              </a>

              <a href="#menu" className="btn btn-secondary">
                Ver cardápio
              </a>
            </div>
          </div>

          <div className="contact-form-box card">
            <div className="contact-form-header">
              <span className="contact-mini-badge">Pedido rápido</span>
              <h2>Faça seu pedido</h2>
              <p>Mande sua lista e a Bia prepara para você.</p>
            </div>

            <form className="contact-form" onSubmit={handleManualOrder}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="WhatsApp com DDD"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="order"
                placeholder="Descreva seu pedido..."
                rows="6"
                value={formData.order}
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary form-submit-btn">
                Enviar Pedido
              </button>

              {/* MENSAGEM DE SUCESSO */}
              {success && (
                <p className="success-message">
                  Pedido enviado com sucesso! ✔
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact