import Navbar from "./components/Navbar.jsx"; 
import Home from './pages/Home';
import Features from './components/Features';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>
      
      {/* Aqui é o destino dos links de Cardápio e Unidade */}
      <section id="features">
        <Features /> 
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
