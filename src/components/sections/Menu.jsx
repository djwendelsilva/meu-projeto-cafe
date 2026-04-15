import { useMemo, useState } from 'react'
import './Menu.css'

const numero = '5521991902018'
const pixKey = 'djwendelrj+bradesco@gmail.com'

const menuData = [
  {
    category: 'Clássicos',
    items: [
      { name: 'Misto Comum', price: 'R$ 8,00', tag: '🔥 Mais pedido' },
      { name: 'Misto Premium', price: 'R$ 10,00', tag: '⭐ Favorito da rua' },
      { name: 'Pão com Ovo', price: 'R$ 6,00', tag: '⚡ Pronto rápido' },
    ],
  },
  {
    category: 'Combos e Bebidas',
    items: [
      { name: 'Combo Misto + Café', price: 'R$ 10,50', tag: '🔥 Mais pedido' },
      { name: 'Suco Natural', price: 'R$ 7,00' },
    ],
  },
  {
    category: 'Doces e Sobremesas',
    items: [
      { name: 'Bolo da Casa', price: 'R$ 6,00', tag: '⭐ Favorito da rua' },
      { name: 'Bolo de Cenoura', price: 'R$ 7,00' },
    ],
  },
  {
    category: 'Cafés e Adicionais',
    items: [
      { name: 'Café', price: 'R$ 3,00', tag: '⚡ Pronto rápido' },
      { name: 'Adicional de Ovo', price: 'R$ 2,00' },
    ],
  },
]

const parsePrice = (price) => {
  return Number(
    price
      .replace('R$', '')
      .replace(/\s/g, '')
      .replace('.', '')
      .replace(',', '.')
  )
}

const formatPrice = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

const Menu = () => {
  const [cart, setCart] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [customerName, setCustomerName] = useState('')
  const [notes, setNotes] = useState('')

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name)

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

      return [
        ...prevCart,
        {
          ...item,
          numericPrice: parsePrice(item.price),
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (itemName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (itemName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName))
  }

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.numericPrice * item.quantity, 0)
  }, [cart])

  const paymentText =
    paymentMethod === 'pix'
      ? `Pix (chave: ${pixKey})`
      : 'Cartão na retirada'

  const handleSendOrder = () => {
    if (cart.length === 0) return

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} — ${formatPrice(
            item.numericPrice * item.quantity
          )}`
      )
      .join('\n')

    const mensagem = `Olá! Quero fazer o seguinte pedido no Cafezinho da Bia ☕

Cliente: ${customerName || 'Não informado'}

Pedido:
${itemsText}

Total: ${formatPrice(total)}

Pagamento: ${paymentText}
${
  paymentMethod === 'pix'
    ? 'Pagamento no Pix, por favor enviar o comprovante.'
    : ''
}

Retirada: no local

Observações:
${notes || 'Nenhuma.'}`

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Nosso Cardápio</h2>

        <p className="menu-subtitle">
          Escolha, ajuste e finalize seu pedido
        </p>

        <div className="menu-grid">
          {menuData.map((category) => (
            <div className="menu-card" key={category.category}>
              <h3 className="menu-category-title">{category.category}</h3>

              <ul className="menu-list">
                {category.items.map((item) => (
                  <li className="menu-item" key={item.name}>
                    <div className="menu-item-info">
                      <span className="menu-item-name">{item.name}</span>

                      {item.tag && (
                        <span className="menu-tag">{item.tag}</span>
                      )}
                    </div>

                    <div className="menu-item-actions">
                      <span className="menu-price">{item.price}</span>

                      <button
                        type="button"
                        className="menu-add-button"
                        onClick={() => addItemToCart(item)}
                      >
                        Adicionar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="menu-order-box">
          <h3 className="menu-order-title">Seu pedido</h3>

          {cart.length === 0 ? (
            <p className="menu-empty-cart">Nenhum item ainda.</p>
          ) : (
            <>
              <ul className="menu-cart-list">
                {cart.map((item) => (
                  <li className="menu-cart-item" key={item.name}>
                    <div className="menu-cart-info">
                      <span className="menu-cart-name">{item.name}</span>
                      <span className="menu-cart-price">
                        {formatPrice(item.numericPrice)} cada
                      </span>
                    </div>

                    <div className="menu-cart-controls">
                      <button
                        type="button"
                        className="qty-button"
                        onClick={() => decreaseQuantity(item.name)}
                      >
                        −
                      </button>

                      <span className="qty-value">{item.quantity}</span>

                      <button
                        type="button"
                        className="qty-button"
                        onClick={() => increaseQuantity(item.name)}
                      >
                        +
                      </button>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeItem(item.name)}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="menu-form-box">
                <div className="menu-form-group">
                  <label className="menu-label" htmlFor="customerName">
                    Nome do cliente
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    className="menu-input"
                    placeholder="Digite seu nome"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div className="menu-form-group">
                  <label className="menu-label" htmlFor="notes">
                    Observações
                  </label>
                  <textarea
                    id="notes"
                    className="menu-textarea"
                    placeholder="Ex: retirar às 8h, sem açúcar, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="menu-payment-box">
                <p className="menu-payment-title">Forma de pagamento</p>

                <label className="menu-payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Pix
                </label>

                <label className="menu-payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cartao"
                    checked={paymentMethod === 'cartao'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cartão na retirada
                </label>
              </div>

              <div className="menu-summary-box">
                <h4 className="menu-summary-title">Resumo final</h4>

                <div className="menu-summary-row">
                  <span className="menu-summary-label">Cliente</span>
                  <span className="menu-summary-value">
                    {customerName || 'Não informado'}
                  </span>
                </div>

                <div className="menu-summary-row">
                  <span className="menu-summary-label">Itens</span>
                  <span className="menu-summary-value">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>

                <div className="menu-summary-row">
                  <span className="menu-summary-label">Pagamento</span>
                  <span className="menu-summary-value">{paymentText}</span>
                </div>

                {paymentMethod === 'pix' && (
                  <div className="menu-pix-box">
                    <span className="menu-pix-label">Chave Pix</span>
                    <span className="menu-pix-key">{pixKey}</span>
                    <p className="menu-pix-note">
                      Pagamento no Pix, por favor enviar o comprovante.
                    </p>
                  </div>
                )}

                <div className="menu-total-box">
                  <span className="menu-total-label">Total</span>
                  <span className="menu-total-value">{formatPrice(total)}</span>
                </div>

                <p className="menu-pickup-note">
                  Retirada somente no local.
                </p>
              </div>

              <button
                type="button"
                className="menu-send-button"
                onClick={handleSendOrder}
              >
                Enviar pedido no WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu