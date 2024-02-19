import './MoviesItem.css';

function MoviesItem({ movieCard, buttonType, isMovieSaved, onSaveMovie }) {
  const imageUrl = `https://api.nomoreparties.co/${movieCard.image.url}`;

  function getDurationFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <div className='movies-item'>
      <a href={movieCard.trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-item__picture' src={imageUrl} alt={movieCard.nameRU} />
      </a>
      <h2 className='movies-item__name'>{movieCard.nameRU}</h2>
      <p className='movies-item__duration'>{getDurationFromMins(movieCard.duration)}</p>
      <button
        className={`movies-item__button movies-item__button_type_${buttonType}  
          ${isMovieSaved ? 'movies-item__button_active' : ''}`}
        type='button'
        onClick={onSaveMovie}
      ></button>
    </div>
  );
}

export default MoviesItem;
