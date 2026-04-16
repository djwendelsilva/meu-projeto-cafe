import { useMemo, useState } from 'react'
import './Menu.css'

const menuData = [
  {
    category: 'Clássicos',
    items: [
      { id: 1, name: 'Misto Comum', price: 8, tag: '🔥 Mais pedido' },
      { id: 2, name: 'Misto Premium', price: 10, tag: '⭐ Favorito da rua' },
      { id: 3, name: 'Pão com Ovo', price: 6, tag: '⚡ Pronto rápido' },
    ],
  },
  {
    category: 'Combos e Bebidas',
    items: [
      { id: 4, name: 'Combo Misto + Café', price: 10.5, tag: '🔥 Mais pedido' },
      { id: 5, name: 'Suco Natural', price: 7 },
    ],
  },
  {
    category: 'Doces e Sobremesas',
    items: [
      { id: 6, name: 'Bolo da Casa', price: 6, tag: '⭐ Favorito da rua' },
      { id: 7, name: 'Bolo de Cenoura', price: 7 },
    ],
  },
  {
    category: 'Cafés e Adicionais',
    items: [
      { id: 8, name: 'Café', price: 3, tag: '⚡ Pronto rápido' },
      { id: 9, name: 'Adicional de Ovo', price: 2 },
    ],
  },
]

const pixKey = 'djwendelrj+bradesco@gmail.com'

function Menu() {
  const [cart, setCart] = useState({})
  const [customerName, setCustomerName] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Pix')
  const [notes, setNotes] = useState('')
  const [copied, setCopied] = useState(false)
  const [addedItemId, setAddedItemId] = useState(null)

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: {
        ...item,
        quantity: prev[item.id] ? prev[item.id].quantity + 1 : 1,
      },
    }))

    setAddedItemId(item.id)

    setTimeout(() => {
      setAddedItemId((currentId) => (currentId === item.id ? null : currentId))
    }, 1200)
  }

  const changeQuantity = (id, delta) => {
    setCart((prev) => {
      const item = prev[id]
      if (!item) return prev

      const newQty = item.quantity + delta

      if (newQty <= 0) {
        const updated = { ...prev }
        delete updated[id]
        return updated
      }

      return {
        ...prev,
        [id]: { ...item, quantity: newQty },
      }
    })
  }

  const cartItems = useMemo(() => Object.values(cart), [cart])

  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
    [cartItems]
  )

  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  )

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      alert('Erro ao copiar a chave Pix.')
    }
  }

  const finalizeOrder = () => {
    if (cartItems.length === 0) {
      alert('Carrinho vazio')
      return
    }

    const itemsText = cartItems
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} = R$ ${(item.quantity * item.price).toFixed(2)}`
      )
      .join('\n')

    const message = encodeURIComponent(
      `Pedido:\n\n${itemsText}\n\nTotal: R$ ${totalPrice.toFixed(
        2
      )}\n\nNome: ${customerName || 'Não informado'}\n\nPagamento: ${
        paymentMethod
      }\n\nChave Pix: ${pixKey}\n\nObs: ${notes || 'Nenhuma'}`
    )

    window.open(`https://wa.me/5521991902018?text=${message}`, '_blank')
  }

  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Cardápio</span>
          <h2 className="section-title">Monte seu pedido</h2>
        </div>

        <div className="menu-categories">
          {menuData.map((category) => (
            <div key={category.category} className="category card">
              <h3>{category.category}</h3>

              {category.items.map((item) => {
                const wasAdded = addedItemId === item.id

                return (
                  <div key={item.id} className="menu-item">
                    <div>
                      <strong>{item.name}</strong>
                      {item.tag && <p className="tag">{item.tag}</p>}
                    </div>

                    <div className="item-right">
                      <span>R$ {item.price.toFixed(2)}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className={wasAdded ? 'added' : ''}
                      >
                        {wasAdded ? '✔ Adicionado' : 'Adicionar'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="cart card">
          <h3>Seu pedido ({totalItems})</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>

              <div>
                <button type="button" onClick={() => changeQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => changeQuantity(item.id, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}

          <input
            placeholder="Seu nome"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Pix</option>
            <option>Dinheiro</option>
            <option>Cartão</option>
          </select>

          {paymentMethod === 'Pix' && (
            <div className="pix-box">
              <p>{pixKey}</p>
              <button type="button" onClick={copyPixKey}>
                {copied ? 'Copiado!' : 'Copiar chave'}
              </button>
            </div>
          )}

          <textarea
            placeholder="Observações"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <h3>Total: R$ {totalPrice.toFixed(2)}</h3>

          <button type="button" className="btn btn-primary" onClick={finalizeOrder}>
            Finalizar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu