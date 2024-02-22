import './Checkbox.css';

function Checkbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        <input type='checkbox' className='checkbox__invisible-checkbox' />
        <span className='checkbox__visible-checkbox checkbox__visible-checkbox_type_checked'></span>
      </label>
      <p className='checkbox__content'>Короткометражки</p>
    </div>
  );
}

export default Checkbox;
