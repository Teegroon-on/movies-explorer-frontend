import LogoImage from '../LogoImage/LogoImage';
import { useLocation } from 'react-router-dom';
import './Header.css';
import NavigationComponent from '../NavigationComponent/NavigationComponent';
import Burger from '../Burger/Burger';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({
  isLoggedIn,
  isBurgerOpen,
  onBurgerOpen,
  onBurgerClose,
  onNavigateToSignup,
  onNavigateToSignin,
  onNavigateToProfile,
}) {
  const { pathname } = useLocation();
  const pathMain = pathname === '/';
  const pathsWithMoviesAndProfile = pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile';
  const headerWrapperClassName = `header__wrapper ${isLoggedIn ? 'header__wrapper_user_logged-in' : ''}    
  ${pathMain ? 'header__wrapper_place_main' : ''} 
  ${pathsWithMoviesAndProfile ? 'header__wrapper_place_movies' : ''}`;

  return (
    <header className='header'>
      <div className={headerWrapperClassName}>
        <LogoImage />
        <NavigationComponent
          isLoggedIn={isLoggedIn}
          onNavigateToSignup={onNavigateToSignup}
          onNavigateToSignin={onNavigateToSignin}
          onNavigateToProfile={onNavigateToProfile}
        />
        <BurgerButton isLoggedIn={isLoggedIn} onBurgerOpen={onBurgerOpen} />
        <Burger isOpen={isBurgerOpen} onClose={onBurgerClose} onNavigateToProfile={onNavigateToProfile} />
      </div>
    </header>
  );
}

export default Header;
