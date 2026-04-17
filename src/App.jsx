import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Menu from './components/sections/Menu'
import Unidades from './components/sections/Unidades'

import WhatsAppButton from './components/ui/WhatsAppButton'

import Home from './pages/Home'
import Contact from './pages/Contact'

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
  )
}

export default App