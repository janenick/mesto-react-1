import React from 'react';

function PopupWithForm(props) {
  const {
    isOpen,
    onSubmit,
    onClose,
    name,
    title,
    children,
    submitButtonText,
  } = props;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <form
        className={`popup__container popup__container_type_${name}`}
        name={name}
        onSubmit={onSubmit}
      >
        <button
          type='reset'
          className='button button_close popup__button popup__button_close'
          onClick={onClose}
        ></button>
        <fieldset className='popup__input-container'>
          <legend className='popup__heading'>{title}</legend>
          {children}
        </fieldset>
        <button
          type='submit'
          className='button popup__button popup__button_submit'
        >
          {submitButtonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
