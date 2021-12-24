'use strict'


// Make navbar transparent on the top
// Make homeContainer slowly fade down as the window scrolls down

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight)
    navbar.style.backgroundColor = 'black';
  
  else
    navbar.style.backgroundColor = 'transparent';
  
    homeContainer.style.opacity = 1 - window.scrollY/homeContainerHeight;

});


// Make navbar item point each section

const navbarmenu = document.querySelector('.navbar__menu');
const contactbtn = document.querySelector('#home button');

navbarmenu.addEventListener('click', () => {
  const target = event.target;
  scrollIntoView(target);
});

contactbtn.addEventListener('click', () => {
  const target = event.target;
  scrollIntoView(target);
});

function scrollIntoView (selector) {
  
  const link = selector.dataset.link;
  console.log(link);
  
  if (link == null){
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
}

