import React from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function onCardClick(cardData) {
    props.handleCardClick(cardData);
  }

  function handleCardLike(cardData) {
    const { card } = cardData;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    }).catch((err) => console.log(`Ошибка при попытке поставить/снять лайк: ${err}`));
  }

  return (
    <div className='main'>
      <section className='profile'>
        <div className='profile__avatar-overlay'>
          <img
            src={currentUser.avatar}
            alt='Аватар пользователя'
            className='profile__avatar'
          />
          <button
            className='profile__button_action_avatar-change'
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className='profile__info'>
          <button
            type='button'
            className='button profile__button profile__button_action_edit'
            onClick={props.onEditProfile}
          ></button>
          <p className='profile__name'>{currentUser.name}</p>
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button
          type='button'
          className='button profile__button profile__button_action_add'
          onClick={props.onAddPlace}
        ></button>
      </section>
      <ul className='elements'>
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
