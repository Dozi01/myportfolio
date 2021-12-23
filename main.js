'use strict'


// Make navbar transparent on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight)
    navbar.style.backgroundColor = 'black';
  
  else
    navbar.style.backgroundColor = 'transparent';
  
});


// Make navbar item point each section

const navbarmenu = document.querySelector('.navbar__menu');


navbarmenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  
  if (link == null){
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
  
});


