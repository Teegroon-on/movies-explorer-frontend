import Checkbox from '../Checkbox/Checkbox';
import IconGrey from '../../images/search-grey.svg';
import IconWhite from '../../images/search-white.svg';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search-form'>
        <div className='search-form__wrapper'>
          <img src={IconGrey} alt='Иконка Поиска(серая)'/>
          <label className='search-form__label'>
            <input
              className='search-form__input'
              type='text'
              name='search'
              id='search'
              placeholder='Фильм'
              autoComplete='off'
              required
            />
          </label>
          <button className='search-form__submit-button' type='submit'>
          <img src={IconWhite} alt='Иконка Поиска(белая)'/>
          </button>
          <div className='search-form__divider'></div>
          <div className='search-form__checkbox-big'> 
            <Checkbox />
          </div>
        </div>
        <div className='search-form__checkbox-small'> 
            <Checkbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
