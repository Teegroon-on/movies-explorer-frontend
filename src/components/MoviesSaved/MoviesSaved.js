import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './MoviesSaved.css';

function MoviesSaved({ moviesCards, isLoading }) {
  return (
    <main className='movies-saved'>
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesCards={moviesCards} buttonType='delete' place='saved-movies' />
      )}
    </main>
  );
}

export default MoviesSaved;
