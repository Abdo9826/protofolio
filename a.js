const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');
const limenu = document.querySelector('.limenu');
const limenu2 = document.querySelector('.limenu2');
const limenu3 = document.querySelector('.limenu3');
const mobile_button1 = document.querySelector('.btn1');
const xbutton = document.querySelector('.xbutton');
const mobile_window = document.querySelector ('.mobile-window');
const mobile_button2 = document.querySelector('.btn2');


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

mobile_button2.addEventListener('click', ()=> {
  mobile_window.style.display = 'block';
  window.addEventListener('scroll', () => {
    window.scrollTo(0,0);
  })
});

mobile_button1.addEventListener('click', () => {
  mobile_window.style.display = 'block';
});

xbutton.addEventListener('click', () => {
  mobile_window.style.display = 'none';
});