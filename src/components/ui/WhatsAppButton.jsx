import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

const whatsappNumber = '5521991902018'

function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const message = encodeURIComponent(
    'Olá! Vim pelo site do Cafezinho da Bia e queria tirar uma dúvida.'
  )

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float ${visible ? 'show' : ''}`}
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton