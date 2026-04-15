import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Menu from "./components/sections/Menu";
import Unidades from "./components/sections/Unidades";
import Contact from "./pages/Contact";

import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Menu />
        <Unidades />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;