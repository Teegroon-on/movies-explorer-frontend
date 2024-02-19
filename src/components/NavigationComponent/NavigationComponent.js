import MenuLogged from '../MenuLogged/MenuLogged';
import Menu from '../Menu/Menu';
import './NavigationComponent.css';
import { useLocation } from 'react-router-dom';

function NavigationComponent({ isLoggedIn, onNavigateToSignup, onNavigateToSignin, onNavigateToProfile }) {
  const { pathname } = useLocation();
  const otherPaths = pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile';
  const mainPath = pathname === '/';

  return ( 
    <nav className={`navigation ${otherPaths ? 'navigation_place_movies' : ''}`}>
      {mainPath && (
        <ul className='navigation__links'>
          {isLoggedIn && <MenuLogged place='main' onNavigateToProfile={onNavigateToProfile} />}
          <li>
            {!isLoggedIn && (
              <Menu onNavigateToSignup={onNavigateToSignup} onNavigateToSignin={onNavigateToSignin} />
            )}
          </li>
        </ul>
      )}
      {otherPaths && <MenuLogged place='movies' onNavigateToProfile={onNavigateToProfile} />}
    </nav>
  );
}

export default NavigationComponent;
