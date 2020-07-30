import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup photo ${props.isOpen && 'popup_opened'}`}>
      <figure className='photo__figure'>
        <button
          type='reset'
          className='photo__close button button_close'
          onClick={props.onClose}
        ></button>
        <img
          className='photo__img'
          src={props.link}
          alt={props.name}
        />
        <figcaption className='photo__caption'>{props.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
