import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && 'popup_opened'
      }`}
    >
      <form
        className={`popup__container popup__container_type_${props.name}`}
        name={props.name}
      >
        <button
          type='reset'
          className='button button_close popup__button popup__button_close'
          onClick={props.onClose}
        ></button>
        <fieldset className='popup__input-container'>
          <legend className='popup__heading'>{props.title}</legend>
          {props.children}
        </fieldset>
        <button
          type='submit'
          className='button popup__button popup__button_submit'
        >
          {props.submit}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
