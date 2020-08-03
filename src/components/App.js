import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import { api } from '../utils/Api';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState({});
  const [isLoading, setLoading] = useState();

  //Получить данные пользователя
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) =>
        console.log(`Ошибка при загрузке информации о пользователе: ${err}`)
      );
  }, []);

  //Получить карточки
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(`Ошибка при загрузке карточек: ${err}`));
  }, [cards]);

  //Лайк/дизлайк карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) =>
        console.log(`Ошибка при попытке поставить/снять лайк: ${err}`)
      );
  }

  //Удалить карточку после подтверждения
  function handleConfirm() {
    api
      .deleteCard(cardToDelete._id)
      .then(() => setCards(cards.filter((item) => item === cardToDelete)))
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
    closeAllPopups();
  }

  //Кликнуть на удаление карточки
  function handleCardDelete(card) {
    setConfirmPopupOpen(true);
    setCardToDelete(card);
  }

  //Открыть AvatarPopup
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  //Открыть EditProfilePopup
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  //Открыть AddPlacePopup
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  //Открыть увеличенное фото
  function handleCardClick(card) {
    const { link, name } = card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }

  //Закрыть все попапы
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: '',
    });
    setConfirmPopupOpen(false);
  }

  //Обновить аватар
  function handleUpdateAvatar(newAvatar) {
    setLoading(true);
    api
      .updateUserAvatar(newAvatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`))
      .finally(() => setLoading(false));
  }

  //Обновить данные пользователя
  function handleUpdateUser(userData) {
    setLoading(true);
    api
      .updateUserInfo(userData)
      .then((newUser) => setCurrentUser(newUser))
      .catch((err) => `Ошибка при обновлении информации о пользователе: ${err}`)
      .finally(() => setLoading(false));
    closeAllPopups();
  }

  //Добавить карточку
  function handleAddPlace(card) {
    setLoading(true);
    api
      .addNewCard(card)
      .then((newCard) => setCards([...cards, newCard]))
      .catch((err) =>
        console.log(`Ошибка при добавлении новой карточки: ${err}`)
      )
      .finally(() => setLoading(false));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
        <ConfirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleConfirm}
        />

        <ImagePopup
          name={selectedCard.name}
          link={selectedCard.link}
          onClose={closeAllPopups}
          isOpen={selectedCard.isImageOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
