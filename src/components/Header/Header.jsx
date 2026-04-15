import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link smooth to="#home" className="header-logo-link">
          <div className="header-brand">
            <img src={logo} alt="Cafezinho da Bia" className="header-logo" />
            <span className="header-logo-text">Cafezinho da Bia</span>
          </div>
        </Link>

        <nav>
          <ul className="header-nav-list">
            <li>
              <Link smooth to="#cardapio" className="header-link">
                Cardápio
              </Link>
            </li>

            <li>
              <Link smooth to="#unidades" className="header-link">
                Unidade
              </Link>
            </li>

            <li>
              <Link smooth to="#contact" className="header-link">
                Pedidos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;