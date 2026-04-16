import './Contact.css'

function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site do Cafezinho da Bia e quero tirar uma dúvida.'
  )

  const handleManualOrder = (event) => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const order = form.order.value.trim()

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

    window.open(`https://wa.me/5521991902018?text=${message}`, '_blank')
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
                Quer fazer pedido, tirar dúvida ou perguntar sobre horários?
                O caminho mais rápido continua sendo o WhatsApp.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href={`https://wa.me/5521991902018?text=${whatsappMessage}`}
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
              />

              <input
                type="text"
                name="phone"
                placeholder="WhatsApp com DDD"
              />

              <textarea
                name="order"
                placeholder="Descreva seu pedido..."
                rows="6"
              ></textarea>

              <button type="submit" className="btn btn-primary form-submit-btn">
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact