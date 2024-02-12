document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.open-modal').forEach(function (element) {
    element.addEventListener('click', function () {
      const targetModalId = this.getAttribute('data-target');
      openModal(targetModalId);
    });
  });

  document.querySelectorAll('.modal .close').forEach(function (element) {
    element.addEventListener('click', closeModal);
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
