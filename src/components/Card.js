import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  const { card } = props;
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${
    isOwn ? 'card__delete ' : 'card__delete_hidden'
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like button ${
    isLiked && 'card__like_active'
  }`;
  return (
    <li className='card'>
      <button type='button' className={cardDeleteButtonClassName}></button>
      <div className='card__container'>
        <img
          src={card.link}
          alt={card.name}
          className='card__photo'
          onClick={handleClick}
        />
      </div>
      <h2 className='card__caption'>{card.name}</h2>
      <div className='card__like-block'>
        <button
          type='button'
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
        <span className='card__counter'>{card.likes.length}</span>
      </div>
    </li>
  );
}

export default Card;
