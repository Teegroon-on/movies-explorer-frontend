import { useLocation } from 'react-router-dom';
import './FormComponent.css';

function FormComponent({
  type,
  name,
  values,
  formValid,
  buttonText,
  onSubmit,
  isAccountEdit = true,
  isLoading,
  loadingText,
  errorText,
  children,
  isOtherUserData = true,
}) {
  const { pathname } = useLocation();

  const formClassName = `form-component ${type === 'profiaccountle' ? 'orm-component_type_account' : ''}`;
  const submitButtonDisable = isLoading || !formValid || !isOtherUserData;
  const submitButtonClassName = `form-component__submit-button ${type === 'account' && 'form-component__submit-button_type_account'}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form className={formClassName} 
      name={`${name}`} 
      id='form' 
      onSubmit={handleSubmit} 
      noValidate
    >
      {children}
      {pathname !== '/profile' && <span className='form-component__error'>{errorText}</span>}
      {isAccountEdit && (
        <button type='submit' 
          className={submitButtonClassName} 
          disabled={submitButtonDisable}>
            {isLoading ? loadingText : buttonText}
        </button>
      )}
    </form>
  );
}

export default FormComponent;
