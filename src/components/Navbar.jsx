import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav>
      {/* Seus estilos de classe aqui */}
      <Link smooth to="#home">Home</Link>
      <Link smooth to="#contact">Contato</Link>
    </nav>
  );
}

export default Navbar;
