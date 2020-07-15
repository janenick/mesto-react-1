import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main'>
        <section className='profile'>
          <div className='profile__avatar-overlay'>
            <img
              src='#'
              alt='Аватар пользователя'
              className='profile__avatar'
            />
            <button
              className='profile__button_action_avatar-change'
              onClick={this.props.onEditAvatar}
            ></button>
          </div>
          <div className='profile__info'>
            <button
              type='button'
              className='button profile__button profile__button_action_edit'
              onClick={this.props.onEditProfile}
            ></button>
            <p className='profile__name'>Жак-Ив Кусто</p>
            <p className='profile__about'>Исследователь океана</p>
          </div>
          <button
            type='button'
            className='button profile__button profile__button_action_add'
            onClick={this.props.onAddPlace}
          ></button>
        </section>
        <ul className='elements'></ul>
      </div>
    );
  }
}

export default Main;
