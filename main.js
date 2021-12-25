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
  scrollIntoView(event.currentTarget);
});


// Make project button filter projects

const categorybtn = document.querySelector('.plan__categories');
const project = document.querySelectorAll('.project');
const projectcontainer = document.querySelector('.work__projects');


categorybtn.addEventListener('click', () => {
  const target = event.target;
  
  if(target === categorybtn){
    return;
  }

  
  const projectmenu = target.dataset.projectmenu;
  let platform;

  projectcontainer.style.transform = 'scale(0)';
  window.setTimeout(function(){ 
    for(var i = 0; i < project.length; i++){
      platform = project[i].dataset.platform;
      if(projectmenu === platform){
        project[i].classList.toggle('invisible', false);
      }
      else if(projectmenu ==='all'){
        project[i].classList.toggle('invisible', false);
      }
      else{
        project[i].classList.toggle('invisible', true);
      }
    }
  },150); // timed to match animation-duration
  
  
  // Make categorybtn active 
  const categorybtnactive = document.querySelector('.category__btn.active');
  categorybtnactive.classList.toggle('active');
  target.classList.toggle('active');
  
  // projects animation
  window.setTimeout(function(){
     projectcontainer.style.transform = 'scale(1)';
  },150); // timed to match animation-duration
  
  console.log(projectcontainer);
  
});




function scrollIntoView (selector) {
  
  const link = selector.dataset.link;
  
  if (link === null){
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
}

