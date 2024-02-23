import './Checkbox.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Checkbox({ checked, onFilter, isLoading }) {
  const [isChecked, setIsChecked] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/movies' && checked !== null) {
      setIsChecked(checked);
    }
  }, [pathname, checked]);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onFilter(newValue);
  };
  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        <input 
          type='checkbox'
          className='checkbox__invisible-checkbox'
          onChange={handleCheckboxChange}
          checked={isChecked}
          disabled={isLoading}
          id='checkbox'
          name='checkbox' />
        <span className='checkbox__visible-checkbox checkbox__visible-checkbox_type_checked'></span>
      </label>
      <p className='checkbox__content'>Короткометражки</p>
    </div>
  );
}

export default Checkbox;
