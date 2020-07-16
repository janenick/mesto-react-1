import React from 'react';

class ImagePopup extends React.Component {
  render() {
    return (
      <div className={`popup photo ${this.props.isOpen && 'popup_opened'}`}>
        <figure className='photo__figure'>
          <button
            type='reset'
            className='photo__close button button_close'
            onClick={this.props.onClose}
          ></button>
          <img
            className='photo__img'
            src={this.props.link}
            alt={this.props.name}
          />
          <figcaption className='photo__caption'>{this.props.name}</figcaption>
        </figure>
      </div>
    );
  }
}

export default ImagePopup;
