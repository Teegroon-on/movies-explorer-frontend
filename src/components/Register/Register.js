import './Register.css';
import useForm from '../../customHooks/useForm';
import LoginPage from '../LoginPage/LoginPage';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { nameRegex } from '../../utils/constants/regexConstants';

const Register = ({ name, onSignup, isRequestSuccessful, errorText, onCleanErrorText, isLoading, isLoggedIn }) => {
  const { values, errors, formValid, onChange } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/movies', { replace: true });
  });
  return (
    <main className='register'>
      <LoginPage
        headerText='Добро пожаловать!'
        buttonText='Зарегистрироваться'
        paragraphText='Уже'
        url='/signin'
        linkText='Войти'
        name={`${name}`}
        onSubmit={onSignup}
        isLoading={isLoading}
        loadingText='Регистрация...'
        values={values}
        formValid={formValid}
        isRequestSuccessful={isRequestSuccessful}
        errorText={errorText}
        onCleanErrorText={onCleanErrorText}
      >
        <label htmlFor='name' className='register__label'>
          Имя
        </label>
        <input
          type='text'
          className={`register__input ${errors.name && 'register__input_type_error'}`}
          value={values.name || ''}
          onChange={onChange}
          form='form'
          name='name'
          id='name'
          placeholder='Имя'
          minLength='2'
          maxLength='30'
          autoComplete='off'
          pattern={nameRegex}
          disabled={isLoading}
          required
        />
        <span className='register__error'>{errors.name}</span>
        <label htmlFor='email' className='register__label'>
          E-mail
        </label>
        <input
          type='email'
          className={`register__input ${errors.email && 'register__input_type_error'}`}
          value={values.email || ''}
          onChange={onChange}
          name='email'
          id='email'
          placeholder='E-mail'
          autoComplete='off'
          disabled={isLoading}
          required
        />
        <span className='register__error'>{errors.email}</span>
        <label htmlFor='password' className='register__label'>
          Пароль
        </label>
        <input
          type='password'
          value={values.password || ''}
          onChange={onChange}
          className={`register__input ${errors.password && 'register__input_type_error'}`}
          form='form'
          name='password'
          id='password'
          placeholder='Пароль'
          autoComplete='off'
          minLength='8'
          maxLength='30'
          disabled={isLoading}
          required
        />
        <span className='register__error'>{errors.password}</span>
      </LoginPage>
    </main>
  );
};

export default Register;
