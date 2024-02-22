import './Account.css';
import FormComponent from '../FormComponent/FormComponent';
import LoginTitle from '../LoginTitle/LoginTitle';

function Account({ user, isEdit, onSignOut, onSubmit, onEditProfile, isFormValid }) {
  return (
    <main className='account'>
      <section className='account__wrapper'>
        <LoginTitle headerText={`Привет, ${user.name}!`} place='account' />
        <FormComponent
          type='account'
          name='account'
          buttonText='Сохранить'
          isAccountEdit={isEdit}
          onSubmit={onSubmit}
          isFormValid={isFormValid}
        >
          <label htmlFor='name' className='account__input-label'>
            Имя
          </label>
          <input
            className='account__input'
            type='text'
            name='name'
            id='name'
            placeholder='Имя'
            autoComplete='off'
            minLength='2'
            maxLength='30'
            defaultValue={user.name}
            required
            disabled={!isEdit && true}
          />
          <label htmlFor='email' className='account__input-label account__input-label_type_e-mail'>
            E-mail
          </label>
          <input
            className='account__input account__input_type_e-mail'
            type='email'
            name='email'
            id='email'
            placeholder='E-mail'
            autoComplete='off'
            defaultValue={user.email}
            required
            disabled={!isEdit && true}
          />

          {isEdit && !isFormValid && <span className='account__error'>При обновлении профиля произошла ошибка.</span>}
        </FormComponent>
        {!isEdit && (
          <div className='account__buttons'>
            <button className='account__button' type='button' onClick={onEditProfile}>
              Редактировать
            </button>
            <button className='account__button account__button_type_logout' type='button' onClick={onSignOut}>
              Выйти из аккаунта
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Account;
