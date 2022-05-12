const projects = [
    {
      id: 1,
      title: 'Multi-Post Stories',
      mobimage: 'image/placeholder.png',
      desimage: 'image/img1.png',
      description: "  A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
      technologies: ['image/css.png', 'image/html.png', 'image/bootstrap.png', 'image/runy.png'],
    },
    {
      id: 2,
      title2: 'Professional Art Printing Data',
      description2: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
      technologies2: ['html2.png', 'bootstrap2.png', 'ruby2.png'],
    },
    {
      id: 3,
      title2: 'Professional Art Printing Data',
      description2: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
      technologies2: ['html2.png', 'bootstrap2.png', 'ruby2.png'],
    },
    {
      id: 4,
      title2: 'Professional Art Printing Data',
      description2: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
      technologies2: ['html2.png', 'bootstrap2.png', 'ruby2.png'],
    },
    {
      id: 5,
      title2: 'Professional Art Printing Data',
      description2: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
      technologies2: ['html2.png', 'bootstrap2.png', 'ruby2.png'],
    },
  ];
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
h3.innerText = "Multi-Post Stories";
container.append(h3);
const p =document.createElement('p');
p.setAttribute('class', 'prj1');
p.innerText = "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text"
container.append(p);
const form = document.createElement('form');
form.setAttribute('action', '#');
container.append(form);
const button1 = document.createElement('button');
button1.setAttribute('class', 'btn1');
button1.innerText = "See Project";
form.append(button1);
const secondcard = document.querySelector('#project23');
const h22 = document.createElement('h2');
h22.setAttribute('class', 's4h1')
h22.innerText = "Profesional Art Printing Data";
secondcard.append(h22);
const p2 = document.createElement('p');
p2.setAttribute('class', 'p2');
p2.innerText = "  A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard";
secondcard.append(p2);
const form2 = document.createElement('form');
form2.setAttribute('action', "#");
secondcard.append(form2);
const button2 = document.createElement('button');
button2.setAttribute('class', 'btn2');
button2.innerText = "See Project";
form2.append(button2);
