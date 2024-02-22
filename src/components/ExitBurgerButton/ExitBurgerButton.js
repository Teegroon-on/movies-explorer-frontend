import './ExitBurgerButton.css';

function ExitBurgerButton({ onClose }) {
  return <button className='exit-burger-button' type='button' onClick={onClose}></button>;
}

export default ExitBurgerButton;
