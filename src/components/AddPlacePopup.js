import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChange(evt) {
    evt.target.name === 'name'
      ? setName(evt.target.value)
      : setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      formName='photo'
      title='Новое место'
      submitButtonText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='popup__field'>
        <input
          className='popup__input'
          id='name'
          name='name'
          value={name || ''}
          placeholder='Название'
          minLength='1'
          maxLength='30'
          required
          onChange={handleChange}
        />
        <span className='popup__input-error' id='name-error'></span>
      </label>
      <label htmlFor='link' className='popup__field'>
        <input
          type='url'
          className='popup__input'
          id='link'
          name='link'
          value={link || ''}
          placeholder='Ссылка на картинку'
          required
          onChange={handleChange}
        />
        <span className='popup__input-error' id='link-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
