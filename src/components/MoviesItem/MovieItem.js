import './MoviesItem.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesItem({ movieCard, buttonType, onSaveMovie, onDeleteMovie, place, IsSaved, savedMovies }) {

  const [isMovieSaved, setIsMovieSaved] = useState(IsSaved ? true : false);
  const [movieIdForDelete, setMovieIdForDelete] = useState('');

  const { pathname } = useLocation();
  const moviePath = pathname === '/movies';

  const onClickOnMoviePath = isMovieSaved ? handleDeleteMovie : handleSaveMovie;

  const movie = Object.assign({}, movieCard);
  movie.image = Object.assign({}, movieCard.image);
  movie.image = place === 'saved-movies' ? movieCard.image : `https://api.nomoreparties.co/${movieCard.image.url}`;
  movie.thumbnail = movieCard.thumbnail || `https://api.nomoreparties.co/${movieCard.image.formats.thumbnail.url}`;
  movie.movieId = movie.id;

  function handleGetDurationFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  function handleSaveMovie() {
    onSaveMovie(movie);
    setIsMovieSaved(true);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movieIdForDelete || movie._id);
    setIsMovieSaved(false);
  }

  useEffect(() => {
    const savedFilm = savedMovies && savedMovies.find((savedFilm) => savedFilm?.movieId === movieCard.id);
    setMovieIdForDelete(savedFilm?._id);
  }, [savedMovies, movieCard.id]);

  return (
    <div className='movies-item'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-item__picture' src={movie.image} alt={movie.nameRU} />
      </a>
      <h2 className='movies-item__name'>{movie.nameRU}</h2>
      <p className='movies-item__duration'>{handleGetDurationFromMins(movie.duration)}</p>
      <button
        className={`movies-item__button movies-item__button_type_${buttonType}  
          ${isMovieSaved ? 'movies-item__button_active' : ''}`}
        type='button'
        onClick={moviePath ? onClickOnMoviePath : handleDeleteMovie}
      ></button>
    </div>
  );
}

export default MoviesItem;
