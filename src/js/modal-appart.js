document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.open-modal').forEach(function (element) {
    element.addEventListener('click', function () {
      const targetModalId = this.getAttribute('data-target');
      openModal(targetModalId);
      document.querySelector('.modal-overlay').classList.add('modal-open');
    });
  });

  document.querySelectorAll('.modal .close').forEach(function (element) {
    element.addEventListener('click', function () {
      closeModal();
      document.querySelector('.modal-overlay').classList.remove('modal-open');
    });
  });
});

function openModal(modalId) {
  document.querySelector(modalId).style.display = 'block';
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.style.display = 'none';
  });
}
