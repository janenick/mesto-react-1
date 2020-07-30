import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmCardDeletePopup(props) {
  const { onClose } = props;

  return (
    <PopupWithForm
      name='delete'
      title='Вы уверены?'
      submitButtonText='Да'
      onClose={onClose}
    ></PopupWithForm>
  );
}

export default ConfirmCardDeletePopup;
