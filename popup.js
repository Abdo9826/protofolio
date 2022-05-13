const firstcard = document.querySelector('#hed2');
const image1 = document.createElement('img');
const image2 = document.createElement('img');
image1.setAttribute('src', 'image/img1.png');
image1.setAttribute('class', 'none');
firstcard.append(image1);
image2.setAttribute('src', 'image/placeholder.png');
image2.setAttribute('class', 'none2');
firstcard.append(image2);
const container = document.createElement('div');
container.setAttribute('id', 'hed2p2');
firstcard.append(container);
const h3 = document.createElement('h3');
h3.setAttribute('class', 's3h3');
h3.innerText = 'Multi-Post Stories';
container.append(h3);
const p = document.createElement('p');
p.setAttribute('class', 'prj1');
p.innerText = 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text';
container.append(p);
const ul1 = document.createElement('ul');
ul1.setAttribute('class', 'lan1');
container.append(ul1);
ul1.innerHTML = `  <li class="l11">
<img src="image/css.png" alt="css icon" />
</li>
<li class="l1">
<img src="image/html.png" alt="html icon" />
</li>
<li class="l1">
<img src="image/bootstrap.png" alt=" bootstrap icon" />
</li>
<li class="l1">
<img src="image/runy.png" alt="runy" />
</li>`;
const form = document.createElement('form');
form.setAttribute('action', '#');
container.append(form);
const button1 = document.createElement('button');
button1.setAttribute('class', 'btn1');
button1.innerText = 'See Project';
form.append(button1);
// objects array
const projectsContainer = [
  {
    id: 1,
    name: 'Profesional Art Printing Data',
    name2: 'Data Dashboard Healthcare',
    featuredImage: '',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html2.png', 'bootstrap2.png', 'ruby2'],

  },
  {
    id: 2,
    name: 'Profesional Art Printing Data',
    name2: 'Website Portfolio',
    featuredImage: '',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html2.png', 'bootstrap2.png', 'ruby2'],
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data',
    name2: 'Data Dashboard Healthcare',
    featuredImage: '',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html2.png', 'bootstrap2.png', 'ruby2'],
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data',
    name2: 'Website Portfolio',
    featuredImage: '',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html2.png', 'bootstrap2.png', 'ruby2'],
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data',
    name2: 'Website Portfolio',
    featuredImage: '',
    description: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html2.png', 'bootstrap2.png', 'ruby2'],
  },
];
const mainPage = projectsContainer.map((section) => ` <div class="project2 none2" id="project23">
<h2 class="s4h1">${section.name}</h2>
<p class="p2">${section.description}</p>

<ul class="lan2">
  <li><img src="image/html2.png" alt="html icon" /></li>
  <li><img src="image/bootstrap2.png" alt="bootstrap icon" /></li>
  <li><img src="image/ruby2.png" alt="ruby icon" /></li>
</ul>

<form action="#"><button class="btn2">See Project</button></form> 
</div>`).join('');
// Append/ join the main page details to the section(body2 class)
const sectionPage = document.querySelector('.body2');
sectionPage.innerHTML += mainPage;
// add a loop with an event listener for all the buttons to have the modal
const mobilewindow1 = document.querySelector('.mobile-window');
document.querySelectorAll('.btn2').forEach((e) => e.addEventListener('click', () => {
  mobilewindow1.style.display = 'block';
}));
// Desktop version
const Mainpage = projectsContainer.map((section2) => ` <div class="project2 pro2">

        <h2 class="s4h1 hpro2">${section2.name2}</h2>
        <p class="p2">${section2.description}</p>

        <ul class="lan2">
          <li><img src="image/html2.png" alt="html icon" /></li>
          <li class="li222"><img src="image/bootstrap2.png" alt="bootstrap icon" /></li>
          <li class="li222"><img src="image/ruby2.png" alt="ruby icon" /></li>
          </ul>
      </div>`).join('');

const projects2 = document.querySelector('#projects2');
projects2.innerHTML += Mainpage;
