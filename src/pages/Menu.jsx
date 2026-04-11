const menuData = [
  {
    category: "Clássicos & Sanduíches",
    items: [
      { name: "Misto Comum", price: "R$ 8,00" },
      { name: "Misto Premium", price: "R$ 10,00" },
      { name: "Pão com Ovo", price: "R$ 6,00" }
    ]
  },
  {
    category: "Combos e Bebidas",
    items: [
      { name: "Combo Misto + Café", price: "R$ 10,50" },
      { name: "Suco Natural", price: "R$ 7,00" }
    ]
  },
  {
    category: "Doces & Sobremesas",
    items: [
      { name: "Bolo da Casa", price: "R$ 6,00" },
      { name: "Bolo de Cenoura", price: "R$ 7,00" }
    ]
  },
  {
    category: "Cafés & Adicionais",
    items: [
      { name: "Café", price: "R$ 3,00" },
      { name: "Adicional de Ovo", price: "R$ 2,00" }
    ]
  }
];

export default function Menu() {
  return (
    <section className="menu">
      <h2>Nosso Cardápio</h2>
      <p className="subtitle">Escolha suas delícias favoritas</p>

      <div className="menu-grid">
        {menuData.map((category) => (
          <div className="menu-category" key={category.category}>
            <h3>{category.category}</h3>

            <ul>
              {category.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}