import logoSvg from '../assets/img/logo.svg';
import '../scss/components/_header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" >
          <div className="header__logo">
            <img width="58" height="73" src={logoSvg} alt="logo" />
            <div>
              <h2>Vertex Visions</h2>
            </div>
          </div>
        </Link>
        <ul className="header__nav">
          <li>
            <Link to="/" ><h3>Главная</h3></Link>
          </li>
          <li>
            <Link to="/order"><h3>Заказ</h3></Link>
          </li>
          <li>
            <Link to="/portfolio"><h3>Портфолио</h3></Link>
          </li>
          <li>
            <Link to="/contacts"><h3>Контакты</h3></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;