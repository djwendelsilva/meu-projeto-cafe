import CoffeeCard from '../components/CoffeeCard';

const Home = () => {
  const coffees = [
    { id: 1, name: "Espresso", price: "6.00", desc: "Intenso e aromático.", img: "https://unsplash.com" },
    { id: 2, name: "Cappuccino", price: "12.00", desc: "Equilíbrio perfeito de leite e café.", img: "https://unsplash.com" },
    { id: 3, name: "Caramel Macchiato", price: "15.50", desc: "Doçura do caramelo com toque de baunilha.", img: "https://unsplash.com" }
  ];

  return (
    <div style={{ padding: '50px 20px', backgroundColor: '#fdf5e6' }}>
      <h2 style={{ textAlign: 'center', color: '#3e2723', marginBottom: '30px' }}>Nosso Cardápio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {coffees.map(item => (
          <CoffeeCard 
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.desc}
            image={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

