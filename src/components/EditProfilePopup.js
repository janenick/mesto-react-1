import React, {useState} from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChange(evt) {
    evt.target.name === 'name' ? setName(evt.target.value) : setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      formName='user'
      title='Редактировать профиль'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='popup__field'>
        <input
          type='text'
          className='popup__input'
          id='name'
          name='name'
          value={name || ''}
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          pattern='[А-Яа-яA-Za-z -]{1,}'
          required
          onChange={handleChange}
        />
        <span className='popup__input-error' id='name-error'></span>
      </label>
      <label htmlFor='about' className='popup__field'>
        <input
          type='text'
          className='popup__input'
          id='about'
          name='about'
          value={description || ''}
          placeholder='О себе'
          minLength='2'
          maxLength='200'
          required
          onChange={handleChange}
        />
        <span className='popup__input-error' id='about-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
