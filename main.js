'use strict'



const navbar = document.querySelector('#navbar');
let navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
const toggleBtn = document.querySelector('.navbar__toggle-btn');

const sections = document.querySelectorAll('section');

const contactBtn = document.querySelector('#home button');
const categoryBtn = document.querySelector('.plan__categories');
const project = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects');

const arrowBtn = document.querySelector('.arrow__btn');

// Make navbar menu interact as the window scrolls down
// intersection observer 을 이용해 구현해보자.

const observeOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
}

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting === true){
      let sectionId = entry.target.id;
      let navbarMenuLink;
      navbarMenuItems.forEach(navbarMenuItem => {
        navbarMenuLink = navbarMenuItem.dataset.link;
        if('#'+sectionId === navbarMenuLink){
          navbarMenuItem.classList.add('active');
        }
        else{
          navbarMenuItem.classList.remove('active');
        }
      });
    }

  });
};

let observer = new IntersectionObserver(callback, observeOptions);
sections.forEach(section => observer.observe(section));



document.addEventListener('scroll', () => {
  // Make navbar transparent on the top
  if(window.scrollY > navbarHeight)
    navbar.classList.toggle('ontop', false);
  else
    navbar.classList.toggle('ontop', true);
  
  // Make arrowBtn show when as the window scrolls down  
  if(window.scrollY > 300)
    arrowBtn.style.transform = 'none';
  else
    arrowBtn.style.transform = 'translatey(100px)';
  
  
  // Make navbarMenu disappear when you scroll in small screen
  navbarMenu.classList.toggle('open', false);
});



// Make navbar item, contactBtn, arrowBtn point each section
navbarMenu.addEventListener('click', () => {
  scrollIntoView(event.target);
});

contactBtn.addEventListener('click', () => {
  scrollIntoView(event.target);
});

arrowBtn.addEventListener('click', () => {
  scrollIntoView(event.currentTarget);
});


// Make project button filter projects
categoryBtn.addEventListener('click', () => {
  const target = event.target;
  const filterNow = projectContainer.dataset.filter;
  const filter = target.dataset.filter;
  let platform;
  
  if(target === categoryBtn || filter === filterNow){
    return;
  }
  
  projectContainer.setAttribute('data-filter', filter);
  
  
  window.setTimeout(function(){ 
    project.forEach((project) => {
      platform = project.dataset.platform;
      if(filter === platform || filter ==='all'){
        project.classList.toggle('invisible', false);
      }
      else{
        project.classList.toggle('invisible', true);
      }
    });
  },150);
    
  // Make categoryBtn active 
  const categoryBtnActive = document.querySelector('.category__btn.active');
  categoryBtnActive.classList.toggle('active');
  target.classList.toggle('active');
  
  // projects animation
  projectContainer.style.transform = 'scale(0)';
  window.setTimeout(function(){
     projectContainer.style.transform = 'scale(1)';
  },150);
});


// navbar toggle btn for small screen
toggleBtn.addEventListener('click', (e)=>{
  navbarMenu.classList.toggle('open');
});



// funcions

function scrollIntoView (selector) {
  const link = selector.dataset.link;
  if (link === null){return;}
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
}

