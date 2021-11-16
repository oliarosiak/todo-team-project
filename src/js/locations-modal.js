(() => {
  const refs = {
    openModalBtn: document.querySelector('[locations-open]'),
    closeModalBtn: document.querySelector('[locations-close]'),
    modal: document.querySelector('[locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();