const humberger = document.querySelector(".humberger");

const ulnav = document.querySelector(".ulnav");

let logo = document.querySelector(".aa");

let Protofolio = document.querySelector(".limenu1");

humberger.addEventListener("click", function () { 
    logo.classList.toggle("none")
    ulnav.classList.toggle("active") 
})
