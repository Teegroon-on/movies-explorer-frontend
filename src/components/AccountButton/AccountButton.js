import './AccountButton.css';
import icon from '../../images/account-image.svg';

function AccountButton({ onNavigateToProfile, onCloseBurger }) {
  function handleNavigeteToProfile() {
    onNavigateToProfile();
    onCloseBurger && onCloseBurger();
  }
  return (
    <button className='account-button' type='button' onClick={handleNavigeteToProfile}>
      <img src={icon} alt='Иконка Аккаунта' />
      <span>Аккаунт</span>
    </button>
  );
}

export default AccountButton;
