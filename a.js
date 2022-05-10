const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');
const limenu = document.querySelector('.limenu');
const limenu2 = document.querySelector('.limenu2');
const limenu3 = document.querySelector('.limenu3');

humberger.addEventListener('click', () => {
  logo.classList.toggle('none');
  ulnav.classList.toggle('active');
  humberger.classList.toggle('active');
});

limenu.addEventListener('click', () => {
  ulnav.classList.remove('active');
  humberger.classList.remove('active');
  logo.classList.remove('none');
});

limenu2.addEventListener('click', () => {
  ulnav.classList.remove('active');
  humberger.classList.remove('active');
  logo.classList.remove('none');
});

limenu3.addEventListener('click', () => {
  ulnav.classList.remove('active');
  humberger.classList.remove('active');
  logo.classList.remove('none');
});