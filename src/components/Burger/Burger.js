import Popup from '../Popup/Popup';
import AccountButton from '../AccountButton/AccountButton';
import ExitBurgerButton from '../ExitBurgerButton/ExitBurgerButton';
import './Burger.css';
import { NavLink } from 'react-router-dom';

function Burger({ isOpen, onClose, onNavigateToProfile }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <nav className={`burger ${isOpen ? 'burger_is_opened' : ''}`}>
        <ExitBurgerButton onClose={onClose} />
        <ul className='burger__list'>
          <li className='burger__list-item'>
            <ul className='burger__links'>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `burger__link ${isActive ? 'burger__link_active' : ''}`
                  }
                  onClick={onClose}
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/movies'
                  className={({ isActive }) =>
                    `burger__link ${isActive ? 'burger__link_active' : ''}`
                  }
                  onClick={onClose}
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/saved-movies'
                  className={({ isActive }) =>
                    `burger__link ${isActive ? 'burger__link_active' : ''}`
                  }
                  onClick={onClose}
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='burger__list-item'>
            <AccountButton onNavigateToProfile={onNavigateToProfile} onCloseBurgerMenu={onClose}/>
          </li>
        </ul>
      </nav>
    </Popup>
  );
}

export default Burger;
