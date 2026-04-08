import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"; 
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Cada seção precisa de um ID correspondente ao link da Navbar */}
        <section id="home">
          <Home />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
