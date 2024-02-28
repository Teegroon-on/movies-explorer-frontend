import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DESKTOP_SCREEN,
  MOBILE_PHONE_HIGH_SCREEN,
  MOBILE_PHONE_SCREEN,
  ZERO_CARDS,
  CARDS_FOR_DESKTOP,
  CARDS_FOR_TABLET,
  CARDS_FOR_MOBILE_PHONE,
  TO_SHOW_MORE_BUTTON,
  MORE_CARDS_FOR_DESKTOP,
  MORE_OF_CARDS_FOR_TABLET_AND_PHONE,
  SHORT_MOVIE_DURATION,
  HANDLERESIZE_TIMEOUT,
} from '../../utils/constants/cardsConstants';

function Movies({ 
  initialMoviesCards,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  onFilter,
  isLoading,
  isMovieInSaved,
  savedMovies,
  didTheUserSearch,
  isRequestSuccessful,
 }) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [moviesCards, setMoviesCards] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  let [items, setItems] = useState(ZERO_CARDS);
  const [moviesRequest, setMoviesRequest] = useState('');
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const { pathname } = useLocation();

  const showMoreButton =
    pathname === '/movies' &&
    moviesCards &&
    moviesCards.length > TO_SHOW_MORE_BUTTON &&
    moviesToShow.length !== moviesCards.length;

  const handleSetMovieCardsLength = useCallback(() => {
    const currentItems = items;
    if (screenWidth >= DESKTOP_SCREEN) {
      return moviesCards.slice(ZERO_CARDS, currentItems + CARDS_FOR_DESKTOP);
    }
    if (screenWidth > MOBILE_PHONE_HIGH_SCREEN && screenWidth < DESKTOP_SCREEN) {
      return moviesCards.slice(ZERO_CARDS, currentItems + CARDS_FOR_TABLET);
    }
    if (screenWidth >= MOBILE_PHONE_SCREEN || screenWidth <= MOBILE_PHONE_HIGH_SCREEN) {
      return moviesCards.slice(ZERO_CARDS, currentItems + CARDS_FOR_MOBILE_PHONE);
    }
  }, [moviesCards, screenWidth, items]);

  useEffect(() => {
    setMoviesRequest(localStorage.getItem('userRequest'));
    setIsCheckBoxChecked(JSON.parse(localStorage.getItem('checkboxState')));
  }, []);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('foundMovies')) || [];
    if (initialMoviesCards && initialMoviesCards.length > ZERO_CARDS) {
      setMoviesCards(initialMoviesCards);
    } else {
      const checkboxState = localStorage.getItem('checkboxState');
      const filteredStoredMovies =
        storedMovies.length > ZERO_CARDS ? storedMovies.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION) : [];
      setMoviesCards(checkboxState === 'true' ? filteredStoredMovies : storedMovies);
    }
  }, [initialMoviesCards]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    let timeoutId;

    const delayedHandleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        handleResize();
      }, HANDLERESIZE_TIMEOUT);
    };

    window.addEventListener('resize', delayedHandleResize);

    return () => {
      window.removeEventListener('resize', delayedHandleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setMoviesToShow(handleSetMovieCardsLength());
  }, [handleSetMovieCardsLength]);

  const handleShowMoreMovies = useCallback(() => {
    if (screenWidth >= DESKTOP_SCREEN) {
      setItems((prevItems) => prevItems + MORE_CARDS_FOR_DESKTOP);
    }

    if (screenWidth >= MOBILE_PHONE_SCREEN && screenWidth < DESKTOP_SCREEN) {
      setItems((prevItems) => prevItems + MORE_OF_CARDS_FOR_TABLET_AND_PHONE);
    }
  }, [screenWidth]);

  useEffect(() => {
    const visibleMoviesCards = handleSetMovieCardsLength();
    setMoviesToShow(visibleMoviesCards);
  }, [handleSetMovieCardsLength]);

  useEffect(() => {
    setItems(ZERO_CARDS);
  }, [moviesCards]);
  return (
    <main className='movies'>
      <SearchForm
        onSubmit={onSubmit}
        onFilter={onFilter}
        moviesRequest={moviesRequest}
        isCheckBoxChecked={isCheckBoxChecked}
        isLoading={isLoading}
      />
      {isLoading && <Preloader />}
      {!isLoading && didTheUserSearch && (
        <MoviesCardList
          movies={moviesToShow}
          buttonType='save'
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          onShowMoreMovies={handleShowMoreMovies}
          place='movies'
          isMovieInSaved={isMovieInSaved}
          savedMovies={savedMovies}
          isRequestSuccessful={isRequestSuccessful}
          showMoreButton={showMoreButton}
        />
      )}
    </main>
  );
}

export default Movies;
