import Header from './components/Header';
import Features from './components/Features';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Features />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;