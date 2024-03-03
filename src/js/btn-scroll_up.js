function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    document.getElementById('scrollBtn').style.display = 'block';
  } else {
    document.getElementById('scrollBtn').style.display = 'none';
  }
}
