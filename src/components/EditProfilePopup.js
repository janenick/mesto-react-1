import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm
      name='user'
      title='Редактировать профиль'
      submit='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor='name' className='popup__field'>
        <input
          type='text'
          className='popup__input'
          id='name'
          name='name'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          pattern='[А-Яа-яA-Za-z -]{1,}'
          required
        />
        <span className='popup__input-error' id='name-error'></span>
      </label>
      <label htmlFor='about' className='popup__field'>
        <input
          type='text'
          className='popup__input'
          id='about'
          name='about'
          placeholder='О себе'
          minLength='2'
          maxLength='200'
          required
        />
        <span className='popup__input-error' id='about-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
