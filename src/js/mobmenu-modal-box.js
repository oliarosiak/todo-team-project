(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobmenu-modal-open-btn]'),
    closeModalBtn: document.querySelector('[mobmenu-modal-close-btn]'),
    modal: document.querySelector('[mobmenu-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();