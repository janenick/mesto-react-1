import React from 'react';

class Card extends React.Component {
  handleClick = () => {
    this.props.onCardClick(this.props.card);
  };

  render() {
    const {card} = this.props;
    let {link, name, likes} = card; 
    return (
      <li className='card'>
        <button type='button' className='card__delete button'></button>
        <div className='card__container'>
          <img
            src={link}
            alt={name}
            className='card__photo'
            onClick={this.handleClick}
          />
        </div>
        <h2 className='card__caption'>{name}</h2>
        <div className='card__like-block'>
          <button type='button' className='card__like button'></button>
          <span className='card__counter'>{likes.length}</span>
        </div>
      </li>
    );
  }
}

export default Card;
