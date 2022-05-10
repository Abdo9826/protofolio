const humberger = document.querySelector('.humberger');
const ulnav = document.querySelector('.ulnav');
const logo = document.querySelector('.aa');

humberger.addEventListener('click', function () { 
  logo.classList.toggle('none');
  ulnav.classList.toggle('active'); 
  humberger.classList.toggle('active');
});
