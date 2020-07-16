import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName,
      userDescription: this.props.userDescription,
      userAvatar: this.props.userAvatar,
      cards: [],
    };
  }

  componentDidMount() {
    api.getUserInfo().then((data) => {
      this.setState({
        userName: data.name,
        userDescription: data.about,
        userAvatar: data.avatar,
      });
    });
    api.getInitialCards().then((data) => {
      this.setState({
        cards: data,
      });
    });
  }

  onCardClick = (cardData) => {
    this.props.handleCardClick(cardData);
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
          {this.state.cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={this.onCardClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
