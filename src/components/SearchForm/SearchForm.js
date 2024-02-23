import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {NO_KEY_WORD_ERROR} from '../../utils/constants/errorsConstants'
import Checkbox from '../Checkbox/Checkbox';
import IconGrey from '../../images/search-grey.svg';
import IconWhite from '../../images/search-white.svg';
import './SearchForm.css';

function SearchForm({ onSubmit, onFilter, isLoading, moviesRequest, isCheckBoxChecked }) {
  const [userRequest, setUserRequest] = useState('');
  const [errorText, setErrorText] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    moviesRequest && setUserRequest(moviesRequest);
  }, [moviesRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname !== '/movies' || userRequest) {
      onSubmit(userRequest);
      setErrorText('');
    } else {
      setErrorText(NO_KEY_WORD_ERROR);
    }
  };

  const handleChange = (e) => {
    setUserRequest(e.target.value);
  };
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search-form' onSubmit={handleSubmit} noValidate>
        <div className='search-form__wrapper'>
          <img src={IconGrey} alt='Иконка Поиска(серая)'/>
          <label className='search-form__label'>
            <input
              className='search-form__input'
              type='search'
              value={userRequest || ''}
              name='search'
              id='search'
              placeholder='Фильм'
              onChange={handleChange}
              disabled={isLoading}
              autoComplete='off'
              required
            />
          </label>
          <button className='search-form__submit-button' type='submit' disabled={isLoading}>
          <img src={IconWhite} alt='Иконка Поиска(белая)'/>
          </button>
          <div className='search-form__divider'></div>
          <div className='search-form__checkbox-big'> 
            <Checkbox />
          </div>
        </div>
        <div className='search-form__checkbox-small'> 
          <span className='search-form__error'>{errorText}</span>
          <Checkbox checked={isCheckBoxChecked} onFilter={onFilter} isLoading={isLoading}/>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
