import React from 'react';
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

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