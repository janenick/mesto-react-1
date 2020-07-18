import React from 'react';

class Card extends React.Component {
  handleClick = () => {
    this.props.onCardClick(this.props);
  };

  render() {
    const {card} = this.props;
    return (
      <li className='card'>
        <button type='button' className='card__delete button'></button>
        <div className='card__container'>
          <img
            src={card.link}
            alt={card.name}
            className='card__photo'
            onClick={this.handleClick}
          />
        </div>
        <h2 className='card__caption'>{card.name}</h2>
        <div className='card__like-block'>
          <button type='button' className='card__like button'></button>
          <span className='card__counter'>{card.likes.length}</span>
        </div>
      </li>
    );
  }
}

export default Card;
