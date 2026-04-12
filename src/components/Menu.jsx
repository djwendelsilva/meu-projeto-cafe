const menuData = [
  {
    category: 'Clássicos',
    items: [
      { name: 'Misto Comum', price: 'R$ 8,00' },
      { name: 'Misto Premium', price: 'R$ 10,00' },
      { name: 'Pão com Ovo', price: 'R$ 6,00' },
    ],
  },
  {
    category: 'Combos e Bebidas',
    items: [
      { name: 'Combo Misto + Café', price: 'R$ 10,50' },
      { name: 'Suco Natural', price: 'R$ 7,00' },
    ],
  },
  {
    category: 'Doces e Sobremesas',
    items: [
      { name: 'Bolo da Casa', price: 'R$ 6,00' },
      { name: 'Bolo de Cenoura', price: 'R$ 7,00' },
    ],
  },
  {
    category: 'Cafés e Adicionais',
    items: [
      { name: 'Café', price: 'R$ 3,00' },
      { name: 'Adicional de Ovo', price: 'R$ 2,00' },
    ],
  },
];

const Menu = () => {
  return (
    <section id="cardapio" style={menuStyle}>
      <h2 style={titleStyle}>Nosso Cardápio</h2>
      <p style={subtitleStyle}>Escolha suas delícias favoritas</p>

      <div style={gridStyle}>
        {menuData.map((category) => (
          <div style={cardStyle} key={category.category}>
            <h3 style={categoryTitleStyle}>{category.category}</h3>

            <ul style={listStyle}>
              {category.items.map((item) => (
                <li style={itemStyle} key={item.name}>
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
};

const menuStyle = {
  width: '100%',
  minHeight: 'calc(100vh - 80px)',
  padding: '40px 20px',
  background: '#0b0b0b',
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: '80px',
};

const titleStyle = {
  fontSize: '2.2rem',
  marginBottom: '10px',
};

const subtitleStyle = {
  color: '#aaa',
  marginBottom: '40px',
};

const gridStyle = {
 display: 'grid',
  gridTemplateColumns:
    window.innerWidth <= 768
      ? '1fr'
      : 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
  width: '100%',
  maxWidth: '1126px',
  margin: '0 auto',
};

const cardStyle = {
  background: '#141414',
  padding: '20px',
  borderRadius: '12px',
  border: '1px solid #222',
  textAlign: 'left',
};

const categoryTitleStyle = {
  marginBottom: '15px',
  color: '#c59d5f',
  fontSize: '1.2rem',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  fontSize: '0.95rem',
  borderBottom: '1px dashed #333',
  paddingBottom: '5px',
};

export default Menu;