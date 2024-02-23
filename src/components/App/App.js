import { useState, useEffect, useCallback} from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Account from '../Account/Account';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectRouteElement from '../ProtectRoute/ProtectRoute';
import Preloader from '../Preloader/Preloader';
import ToolTip from '../ToolTip/ToolTip';
import './App.css';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ZERO_CARDS, SHORT_MOVIE_DURATION } from '../../utils/constants/cardsConstants';
function App() {
  const [initialMovies, setInitialMovies] = useState([]);
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [user] = useState({ name: 'Виталий', email: 'pochta@yandex.ru' });
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [isFormValid] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathsWithHeader = ['/', '/movies', '/saved-movies', '/profile'].includes(pathname);
  const pathsWithFooter = ['/', '/movies', '/saved-movies'].includes(pathname);

  useEffect(() => {
    function handleAutoCloseMenu() {
      window.onresize = () => {
        setIsBurgerOpen(false);
      };
    }

    if (isBurgerOpen) {
      window.addEventListener('resize', handleAutoCloseMenu);
      return () => window.removeEventListener('resize', handleAutoCloseMenu);
    }
  }, [isBurgerOpen]);

  useEffect(() => {
    moviesApi.getMovies().then((movies) => {
      setInitialMovies(movies);
    });
  }, []);

  function handleSignUp() {
    navigate('/signin', { replace: true });
  }

  function handleSignIn() {
    setIsLoggedIn(true);
    navigate('/', { replace: true });
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleSaveMovie() {
    setIsMovieSaved(!isMovieSaved);
  }

  function handleOpenBurger() {
    setIsBurgerOpen(true);
  }

  function handleCloseBurger() {
    setIsBurgerOpen(false);
  }

  function handleEditProfile() {
    setIsProfileEdit(true);
  }

  function hadleProfileSubmit() {
    setIsProfileEdit(false);
  }

  function handleNavigateToSignup() {
    navigate('/signup');
  }

  function handleNavigateToSignin() {
    navigate('/signin');
  }

  function handleNavigateToProfile() {
    navigate('/profile');
  }

  function handleNavigateToMain() {
    navigate('/');
  }

  return (
    <div className='page'>
      <div className='page__wrapper'>
        {pathsWithHeader && (
          <Header
            isLoggedIn={isLoggedIn}
            isBurgerOpen={isBurgerOpen}
            onBurgerOpen={handleOpenBurger}
            onBurgerClose={handleCloseBurger}
            onNavigateToSignup={handleNavigateToSignup}
            onNavigateToSignin={handleNavigateToSignin}
            onNavigateToProfile={handleNavigateToProfile}
          ></Header>
        )}
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route
            path='/movies'
            element={
              <Movies
                moviesCards={initialMovies.slice(0, 16)}
                isMovieSaved={isMovieSaved}
                onSaveMovie={handleSaveMovie}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            path='/saved-movies'
            element={<MoviesSaved moviesCards={initialMovies.slice(0, 16)} isLoading={isLoading} />}
          ></Route>
          <Route
            path='/profile'
            element={
              <Account
                user={user}
                isEdit={isProfileEdit}
                onSubmit={hadleProfileSubmit}
                onEditProfile={handleEditProfile}
                onSignOut={handleSignOut}
                isFormValid={isFormValid}
              />
            }
          ></Route>
          <Route path='/signin' element={<Login onSubmit={handleSignIn} isFormValid={isFormValid} />}></Route>
          <Route path='/signup' element={<Register onSubmit={handleSignUp} isFormValid={isFormValid} />}></Route>
          <Route path='*' element={<NotFoundPage onNavigateToMain={handleNavigateToMain} />}></Route>
        </Routes>
        {pathsWithFooter && <Footer />}
      </div>
    </div>
  );
}

export default App;
