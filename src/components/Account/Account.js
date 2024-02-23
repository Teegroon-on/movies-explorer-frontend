import './Account.css';
import { useContext, useEffect, useState } from 'react';
import useForm from '../../customHooks/useForm';
import FormComponent from '../FormComponent/FormComponent';
import LoginTitle from '../LoginTitle/LoginTitle';
import { nameRegex } from '../../utils/constants/regexConstants.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Account({ isEdit, onSignOut, onSubmit, onEditProfile, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, formValid, onChange, resetValidation } = useForm();
  const [isOtherUserData, setIsOtherUserData] = useState(false);

  useEffect(() => {
    resetValidation({ name: currentUser.name, email: currentUser.email }, {}, false);
  }, [currentUser, resetValidation]);

  useEffect(() => {
    if (values.name !== currentUser.name || values.email !== currentUser.email) {
      setIsOtherUserData(true);
    } else {
      setIsOtherUserData(false);
    }
  }, [values.name, values.email, currentUser.name, currentUser.email]);
  return (
    <main className='account'>
      <section className='account__wrapper'>
        <LoginTitle headerText={`Привет, ${currentUser.name}!`} place='account' />
        <FormComponent
          type='account'
          name='account'
          buttonText='Сохранить'
          loadingText='Сохранение...'
          isProfileEdit={isEdit}
          isLoading={isLoading}
          onSubmit={onSubmit}
          values={values}
          formValid={formValid}
          isOtherUserData={isOtherUserData}
        >
          <fieldset className='account__inputs-container'>
            <label htmlFor='name' className='account__input-label'>
              Имя
            </label>
            <input
              className={`account__input ${errors.name && 'account__input_type_error'}`}
              value={values.name || ''}
              onChange={onChange}
              type='text'
              name='name'
              id='name'
              placeholder='Имя'
              minLength='2'
              maxLength='30'
              autoComplete='off'
              pattern={nameRegex}
              required
              disabled={!isEdit || isLoading}
            />
            <label htmlFor='email' className='account__input-label account__input-label_type_e-mail'>
              E-mail
            </label>
            <input
              className={`account__input account__input_type_e-mail ${errors.email && 'account__input_type_error'}`}
              value={values.email || ''}
              onChange={onChange}
              type='email'
              name='email'
              id='email'
              placeholder='E-mail'
              autoComplete='off'
              required
              disabled={!isEdit || isLoading}
            />
          </fieldset>
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
