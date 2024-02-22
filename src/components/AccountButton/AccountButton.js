import './AccountButton.css';
import icon from '../../images/account-image.svg';

function AccountButton({ onNavigateToProfile }) {
  return (
    <button className='account-button' type='button' onClick={onNavigateToProfile}>
      <img src={icon} alt='Иконка Аккаунта' />
      <span>Аккаунт</span>
    </button>
  );
}

export default AccountButton;
