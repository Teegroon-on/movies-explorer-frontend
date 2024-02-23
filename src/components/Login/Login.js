import './Login.css';
import useForm from '../../customHooks/useForm';
import LoginPage from '../LoginPage/LoginPage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({ name, onSignin, isRequestSuccessful, errorText, onCleanErrorText, isLoading, isLoggedIn }) => {
  const { values, errors, formValid, onChange } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/movies', { replace: true });
  });
  return (
    <main className='login'>
      <LoginPage
        headerText='Рады видеть!'
        buttonText='Войти'
        paragraphText='Ещё не'
        url='/signup'
        linkText='Регистрация'
        name={`${name}`}
        onSubmit={onSignin}
        isLoading={isLoading}
        loadingText='Вход...'
        values={values}
        formValid={formValid}
        isRequestSuccessful={isRequestSuccessful}
        errorText={errorText}
        onCleanErrorText={onCleanErrorText}
      >
        <label htmlFor='email' className='login__input-label'>
          E-mail
        </label>
        <input
          ype='text'
          className={`login__input ${errors.email && 'login__input_type_error'}`}
          value={values.email || ''}
          name='email'
          id='email'
          placeholder='E-mail'
          autoComplete='off'
          onChange={onChange}
          disabled={isLoading}
          required
        />
        <span className='login__error'>errors.email</span>

        <label htmlFor='password' className='login__input-label'>
          Пароль
        </label>
        <input
          type='password'
          className={`login__input ${errors.password && 'login__input_type_error'}`}
          value={values.password || ''}
          name='password'
          id='password'
          placeholder='Пароль'
          minLength='8'
          maxLength='30'
          autoComplete='off'
          disabled={isLoading}
          onChange={onChange}
          required
        />
        <span className='login__error login__error_type_lower'>{errors.password}</span>
      </LoginPage>
    </main>
  );
};

export default Login;
