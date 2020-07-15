import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
    };
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
    });
  };

  render() {
    return (
      <div className='page'>
        <Header />
        <Main
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onEditAvatar={this.handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm
          name='user'
          title='Редактировать профиль'
          submit='Сохранить'
          isOpen={this.state.isEditProfilePopupOpen}
          onClose={this.closeAllPopups}
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

        <PopupWithForm
          name='photo'
          title='Новое место'
          submit='Создать'
          isOpen={this.state.isAddPlacePopupOpen}
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

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          submit='Сохранить'
          isOpen={this.state.isEditAvatarPopupOpen}
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

        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          submit='Да'
        ></PopupWithForm>

        <template id='card-template'>
          <li className='card'>
            <button type='button' className='card__delete button'></button>
            <div className='card__container'>
              <img src='#' alt='' className='card__photo' />
            </div>
            <h2 className='card__caption'>#</h2>
            <div className='card__like-block'>
              <button type='button' className='card__like button'></button>
              <span className='card__counter'></span>
            </div>
          </li>
        </template>
      </div>
    );
  }
}

export default App;
