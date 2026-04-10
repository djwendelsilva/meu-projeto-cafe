import React from 'react';
import Navbar from "./components/Navbar.jsx"; 
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu'; 
import Contact from './pages/Contact';

// Estilo para garantir que os componentes não fiquem um ao lado do outro
const appStyle = {
  display: 'block', // Muda de flex para block para empilhar as seções
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#08060d' // Cor de fundo padrão do seu site
};

function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      
      <section id="home">
        <Home />
      </section>
      
      <section id="features">
        <Features /> 
      </section>

      <section id="cardapio">
        <Menu />
      </section>

      {/* O Map deve estar apenas DENTRO do Contact.jsx para evitar duplicidade */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
