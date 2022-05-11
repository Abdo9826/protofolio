const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');
const limenu = document.querySelector('.limenu');
const limenu2 = document.querySelector('.limenu2');
const limenu3 = document.querySelector('.limenu3');
const mobile_button1 = document.querySelector('.btn1');
const xbutton = document.querySelector('.xbutton');
const mobile_window = document.querySelector('.mobile-window');
const mobile_button2 = document.querySelector('.btn2');
const mobile_button3 = document.querySelector('.btn23');
const mobile_button4 = document.querySelector('.btn24');
const mobile_button5 = document.querySelector('.btn25');
const mobile_button6 = document.querySelector('.btn26');

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

mobile_button2.addEventListener('click', () => {
  mobile_window.style.display = 'block';
  });

mobile_button1.addEventListener('click', () => {
  mobile_window.style.display = 'block';
});

xbutton.addEventListener('click', () => {
  mobile_window.style.display = 'none';
});

mobile_button3.addEventListener('click', ()=> {
  mobile_window.style.display = 'block';
  });

  mobile_button4.addEventListener('click', ()=> {
    mobile_window.style.display = 'block';
    });


mobile_button5.addEventListener('click', ()=> {
  mobile_window.style.display = 'block';
});

mobile_button6.addEventListener('click', ()=> {
  mobile_window.style.display = 'block';
});

