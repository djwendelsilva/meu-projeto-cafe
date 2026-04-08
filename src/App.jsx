import Navbar from "./components/Navbar.jsx"; 
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      {/* O formulário de contato pode ficar aqui ou dentro da Home */}
      <Contact />
    </div>
  );
}

export default App;
