import { Link } from 'react-router-dom';
import './LoginPage.css';
import LogoImage from '../LogoImage/LogoImage';
import FormComponent from '../FormComponent/FormComponent';
import LoginTitle from '../LoginTitle/LoginTitle';

function LoginPage({   headerText,
  buttonText,
  paragraphText,
  url,
  linkText,
  name,
  onSubmit,
  isLoading,
  loadingText,
  values,
  formValid,
  isRequestSuccessful,
  errorText,
  onCleanErrorText,
  children}) {
  return (
    <section className='login-page'>
      <LogoImage />
      <LoginTitle headerText={headerText} />
      <FormComponent buttonText={buttonText}
        type={name}
        name={`${name}`}
        onSubmit={onSubmit}
        isLoading={isLoading}
        loadingText={loadingText}
        values={values}
        formValid={formValid}
        isRequestSuccessful={isRequestSuccessful}
        errorText={errorText}
      >
        {children}
      </FormComponent>
      <div className='login-page__wrapper'>
        <p className='login-page__info'>{`${paragraphText} зарегистрированы?`}</p>
        <Link to={url} className='login-page__link' onClick={onCleanErrorText}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
