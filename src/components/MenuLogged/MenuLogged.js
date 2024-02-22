import AccountButton from '../AccountButton/AccountButton';
import './MenuLogged.css';
import { NavLink } from 'react-router-dom';

function MenuLogged({ place, onNavigateToProfile }) {
  const navLinkClassName = ({ isActive }) =>
    `menu-logged__link ${place === 'main' && 'menu-logged__link_place_main'} 
  ${isActive ? 'menu-logged__link_active' : ''}`;

  return (
    <div className={`menu-logged ${place === 'movies' ? 'menu-logged_place_movies' : ''}`}>
      <ul className={`menu-logged__list ${place === 'movies' && 'menu-logged__list_place_movies'}`}>
        <li>
          <NavLink to='/movies' className={navLinkClassName}>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink to='/saved-movies' className={navLinkClassName}>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <AccountButton onNavigateToProfile={onNavigateToProfile} />
    </div>
  );
}

export default MenuLogged;
