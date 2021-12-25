'use strict'


// Make navbar transparent on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make homeContainer slowly fade down as the window scrolls down
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;

// Make arrowBtn show when as the window scrolls down
const arrowBtn = document.querySelector('.arrow__btn');

// Make navbar menu interact as the window scrolls down
const section = document.querySelectorAll('section');
const sectionYPosition = [];

// Make navbar item, contactBtn, arrowBtn point each section
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');
const contactBtn = document.querySelector('#home button');


// responsive web에서 sectionYPosition이 정상적이지 않은 오류가 있음.
for(var i = 0; i < section.length; i++){
  var rect = section[i].getBoundingClientRect();
  sectionYPosition[i] = rect.top + window.scrollY - 100;
}
  // YPosition for section 'contact'
  sectionYPosition[5] = 4100;

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight)
    navbar.classList.toggle('ontop', false);
  else
    navbar.classList.toggle('ontop', true);
  
  
  homeContainer.style.opacity = 1 - window.scrollY/homeContainerHeight;
    
  
  if(window.scrollY > 300)
    arrowBtn.style.transform = 'none';
  else
    arrowBtn.style.transform = 'translatey(100px)';
  
  
  for(var i = 0; i < section.length; i++){
    const navbarMenuActive = document.querySelector('.navbar__menu__item.active');
    if(window.scrollY >= sectionYPosition[i]){
      navbarMenuActive.classList.toggle('active', false);
      navbarMenuItem[i].classList.toggle('active', true);
    }
  }
  
  
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

const categoryBtn = document.querySelector('.plan__categories');
const project = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects');


categoryBtn.addEventListener('click', () => {
  const target = event.target;
  if(target === categoryBtn){
    return;
  }
  
  const filterNow = projectContainer.dataset.filter;
  const filter = target.dataset.filter;
  if(filter === filterNow){
    return;
  }
  projectContainer.setAttribute('data-filter', filter);
  
  let platform;
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

const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', (e)=>{
  navbarMenu.classList.toggle('open');
});



function scrollIntoView (selector) {
  
  const link = selector.dataset.link;
  
  if (link === null){
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
}

