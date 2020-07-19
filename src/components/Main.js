import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: cardData,
        });
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  onCardClick = (card) => {
    this.props.handleCardClick(card);
  };

  render() {
    return (
      <div className='main'>
        <section className='profile'>
          <div className='profile__avatar-overlay'>
            <img
              src={this.state.userAvatar}
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
            <p className='profile__name'>{this.state.userName}</p>
            <p className='profile__about'>{this.state.userDescription}</p>
          </div>
          <button
            type='button'
            className='button profile__button profile__button_action_add'
            onClick={this.props.onAddPlace}
          ></button>
        </section>
        <ul className='elements'>
          {this.state.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={this.onCardClick} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
