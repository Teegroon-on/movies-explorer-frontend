import './FormComponent.css';

function FormComponent({ type, name, children, buttonText, onSubmit, isAccountEdit = true, isFormValid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      action='#'
      className={`form-component ${type === 'account' ? 'form-component_type_account' : ''}`}
      name={name}
      onSubmit={handleSubmit}
    >
      {children}
      {isAccountEdit && (
        <button
          type='submit'
          className={`form-component__submit-button ${!isFormValid && 'form-component__submit-button_disabled'} 
          ${type === 'account' && 'form-component__submit-button_type_account'}`}
          disabled={!isFormValid && true}
        >
          {buttonText}
        </button>
      )}
    </form>
  );
}

export default FormComponent;
