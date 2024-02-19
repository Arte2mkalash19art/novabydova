(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close-contact]'),
    modal: document.querySelector('[data-backdrop-contact]'),
  };

  const openModalBtns = document.querySelectorAll('[data-modal-open-contact]');
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
