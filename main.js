'use strict'


// Make navbar transparent on the top
// Make homeContainer slowly fade down as the window scrolls down
// Make arrowbtn show when as the window scrolls down

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;
const arrowbtn = document.querySelector('.arrow__btn');

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight)
    navbar.style.backgroundColor = 'black';
  
  else
    navbar.style.backgroundColor = 'transparent';
  
    homeContainer.style.opacity = 1 - window.scrollY/homeContainerHeight;
    
  if(window.scrollY > 300)
    arrowbtn.style.transform = 'none';
  else
    arrowbtn.style.transform = 'translatey(100px)';
  
});


// Make navbar item, contactbtn, arrowbtn point each section


const navbarmenu = document.querySelector('.navbar__menu');
const contactbtn = document.querySelector('#home button');

navbarmenu.addEventListener('click', () => {
  scrollIntoView(event.target);
});

contactbtn.addEventListener('click', () => {
  scrollIntoView(event.target);
});

arrowbtn.addEventListener('click', () => {
  scrollIntoView(event.target);
});




function scrollIntoView (selector) {
  
  const link = selector.dataset.link;
  
  if (link == null){
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
}

