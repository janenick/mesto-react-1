import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup (props) {
  const { isOpen, onClose } = props;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          submitButtonText='Сохранить'
          isOpen={isOpen}
          onClose={onClose}
        >
          <label htmlFor='url' className='popup__field'>
            <input
              type='url'
              className='popup__input'
              id='url'
              name='url'
              placeholder='Ссылка на аватар'
              required
            />
            <span className='popup__input-error' id='url-error'></span>
          </label>
        </PopupWithForm>
  );
}

export default EditAvatarPopup;
