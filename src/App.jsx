import Navbar from "./components/Navbar.jsx"; 
import Home from './pages/Home';
import Features from './components/Features';
import Map from './components/Map'; // Importe o mapa
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      
      <section id="features">
        <Features /> 
      </section>

      {/* Mapa Interativo (Ponto Extra) */}
      <Map />

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
