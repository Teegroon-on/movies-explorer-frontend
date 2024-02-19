import './ExitBurgerButton.css';

function ExitBurgerButton({ onClose }) {
  return <button className='burger-close-button' type='button' onClick={onClose}></button>;
}

export default ExitBurgerButton;
