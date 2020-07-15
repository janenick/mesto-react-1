import React from 'react';

class ImagePopup extends React.Component {
  render() {
    return (
      <div className='photo popup' id='image-popup'>
        <figure className='photo__figure'>
          <button
            type='reset'
            className='photo__close button button_close'
          ></button>
          <img className='photo__img' src='#' alt='' />
          <figcaption className='photo__caption'></figcaption>
        </figure>
      </div>
    );
  }
}

export default ImagePopup;
