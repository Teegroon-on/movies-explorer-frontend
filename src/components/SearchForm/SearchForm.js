import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search-form'>
        <div className='search-form__wrapper'>
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
            Поиск
          </button>
        </div>
        <Checkbox />
      </form>
    </section>
  );
}

export default SearchForm;
