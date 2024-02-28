import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './MoviesSaved.css';

function MoviesSaved({
  moviesCards,
  isLoading,
  onDeleteMovie,
  onFilter,
  didTheUserSearch,
  isRequestSuccessful,
  onSubmit,
}) {
  const storedSavedMovies = JSON.parse(localStorage.getItem('saved-movies'));
  return (
    <main className='movies-saved'>
      <SearchForm onFilter={onFilter} onSubmit={onSubmit} isLoading={isLoading}/>
      {isLoading && <Preloader />}
      {!isLoading && storedSavedMovies.length > 0 && (
        <MoviesCardList
          movies={moviesCards}
          buttonType='delete'
          place='saved-movies'
          onDeleteMovie={onDeleteMovie}
          didTheUserSearch={didTheUserSearch}
          isRequestSuccessful={isRequestSuccessful}
        />
      )}
    </main>
  );
}

export default MoviesSaved;
