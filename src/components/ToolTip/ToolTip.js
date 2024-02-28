import Popup from '../Popup/Popup';
import './ToolTip.css';
import success from '../../images/Tooltip-success.svg';
import fail from '../../images/Tooltip-fail.svg';

function ToolTip({ isOpen, onClose, name, isSuccess, errorText }) {
  const headerText = isSuccess ? 'Вы успешно изменили данные профиля' : 'Что-то пошло не так! Попробуйте ещё раз';
  const imageSrc = isSuccess ? success : fail;

  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className='tool-tip__wrapper'>
        <button className='tool-tip__close' type='button' onClick={onClose}></button>
        <img className='tool-tip__register-image' src={imageSrc} alt={headerText} />
        <h3 className='tool-tip__register-title'>{headerText}</h3>
        {!isSuccess && <p className='tool-tip__error-text'>{errorText}</p>}
      </div>
    </Popup>
  );
}

export default ToolTip;