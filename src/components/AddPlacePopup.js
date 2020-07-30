import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose } = props;

  return (
    <PopupWithForm
      formName='photo'
      title='Новое место'
      submitButtonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
    >
      <label htmlFor='name' className='popup__field'>
        <input
          className='popup__input'
          id='name'
          name='name'
          placeholder='Название'
          minLength='1'
          maxLength='30'
          required
        />
        <span className='popup__input-error' id='name-error'></span>
      </label>
      <label htmlFor='link' className='popup__field'>
        <input
          type='url'
          className='popup__input'
          id='link'
          name='link'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='popup__input-error' id='link-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
