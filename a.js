const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');
const limenu = document.querySelector('.limenu');

humberger.addEventListener('click', () => {
  logo.classList.toggle('none');
  ulnav.classList.toggle('active');
  humberger.classList.toggle('active');
});

limenu.addEventListener('click', () => {
  ulnav.classList.remove('active');
  humberger.classList.remove('active');
  logo.classList.remove('none')
});