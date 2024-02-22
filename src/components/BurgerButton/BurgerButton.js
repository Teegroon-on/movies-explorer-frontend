import './BurgerButton.css';
import { useLocation } from 'react-router-dom';

function BurgerButton({ onBurgerOpen, isLoggedIn }) {
  const { pathname } = useLocation();
  const mainPath = pathname === '/';

  return (
    <button
      className={`burger-button ${mainPath && !isLoggedIn && 'burger-button_is_hidden'} ${mainPath && 'burger-button_place_main'}`}
      onClick={onBurgerOpen}
      type='button'
    ></button>
  );
}

export default BurgerButton;
