import React from 'react';

function PopupWithForm(props) {
  const {
    isOpen,
    onSubmit,
    onClose,
    formName,
    title,
    children,
    submitButtonText,
    disabled,
    isLoading,
  } = props;

  return (
    <div className={`popup popup_type_${formName} ${isOpen && 'popup_opened'}`}>
      <form
        className={`popup__container popup__container_type_${formName}`}
        name={formName}
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
          className={`button popup__button popup__button_submit ${
            isLoading && 'popup__button_submit_loading'
          }`}
          disabled={disabled}
        >
          {isLoading ? `Сохранение...` : submitButtonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
