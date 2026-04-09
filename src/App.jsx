import Navbar from "./components/Navbar.jsx"; 
import Home from './pages/Home';
import Features from './components/Features';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // 1. Importe aqui

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>
      
      <section id="features">
        <Features /> 
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer /> {/* 2. Adicione aqui no final */}
    </div>
  );
}

export default App;
