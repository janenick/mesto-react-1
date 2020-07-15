import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`popup popup_type_${this.props.name} ${
          this.props.isOpen && 'popup_opened'
        }`}
        onClick={this.props.onClose}
      >
        <form
          className={`popup__container popup__container_type_${this.props.name}`}
          name={this.props.name}
          noValidate
        >
          <button
            type='reset'
            className='button button_close popup__button popup__button_close'
          ></button>
          <fieldset className='popup__input-container'>
            <legend className='popup__heading'>{this.props.title}</legend>
            {this.props.children}
          </fieldset>
          <button
            type='submit'
            className='button popup__button popup__button_submit'
          >
            {this.props.submit}
          </button>
        </form>
      </div>
    );
  }
}

export default PopupWithForm;
