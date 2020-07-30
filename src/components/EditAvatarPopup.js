import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const inputRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ url: inputRef.current.value });
  }

  return (
    <PopupWithForm
      formName='avatar'
      title='Обновить аватар'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor='url' className='popup__field'>
        <input
          type='url'
          className='popup__input'
          id='url'
          name='url'
          placeholder='Ссылка на аватар'
          required
          ref={inputRef}
        />
        <span className='popup__input-error' id='url-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
