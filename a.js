const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');
const limenu = document.querySelector('.limenu');
const limenu2 = document.querySelector('.limenu2');
const limenu3 = document.querySelector('.limenu3');
const mobilebutton1 = document.querySelector('.btn1');
const xbutton = document.querySelector('.xbutton');
const mobilewindow = document.querySelector('.mobile-window');
const mobilebutton2 = document.querySelector('.btn2');
const mobilebutton6 = document.querySelector('.btn26');

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

mobilebutton2.addEventListener('click', () => {
  mobilewindow.style.display = 'block';
});

mobilebutton1.addEventListener('click', () => {
  mobilewindow.style.display = 'block';
});

xbutton.addEventListener('click', () => {
  mobilewindow.style.display = 'none';
});

mobilebutton6.addEventListener('click', () => {
  mobilewindow.style.display = 'block';
});
