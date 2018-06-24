// VARIABLES

//cover leaves
const leafTopRight = document.querySelector('.plant__top--right');
const leafBottomLeft = document.querySelector('.plant__bottom--left');
const leafBottomRight = document.querySelector('.plant__bottom--right');
const leafTopLeft = document.querySelector('.plant__top--left');
const leafTopMiddle = document.querySelector('.plant__top--middle');
const leafLeftMiddle = document.querySelector('.plant__left--middle');

//pages
const pageFrame = document.querySelector('.page__frame');
const pageHome = document.querySelector('.page__home');
const pageAbout = document.querySelector('.page__about');
const pagePortfolio = document.querySelector('.page__portfolio');
const pageContact = document.querySelector('.page__contact');

//other
const welcomeText = document.getElementById('text__greeting');
const headerHome = document.querySelector('.header__home');


//buttons

//menu
const btnHome = document.getElementById('btn__home');
const btnAbout = document.getElementById('btn__about');
const btnPortfolio = document.getElementById('btn__portfolio');
const btnContact = document.getElementById('btn__contact');

//mobile menu
const menuMobile = document.querySelector("#menu");
const ul = document.querySelector("ul");
const container = document.querySelector("#menu");
const btnHomeMobile = document.getElementById('btn__home--mobile');
const btnAboutMobile = document.getElementById('btn__about--mobile');
const btnPortfolioMobile = document.getElementById('btn__portfolio--mobile');
const btnContactMobile = document.getElementById('btn__contact--mobile');

// FUNCTIONS

//general
window.addEventListener('load', function(){
  pageHome.style.display = 'initial';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'none';
  currentPage(btnHome);
})

//menu
btnHome.addEventListener('click', function(){
  pageHome.style.display = 'initial';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnHome);
})
btnAbout.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'grid';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnAbout);
})
btnPortfolio.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'grid';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnPortfolio);
})
btnContact.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'grid';
  currentRemove();
  xxx();
  currentPage(btnContact);
})

function xxx() {
  console.log('xxxx');
}

function currentRemove() {
  console.log('run');
  btnHome.classList.remove('current');
  btnAbout.classList.remove('current');
  btnPortfolio.classList.remove('current');
  btnContact.classList.remove('current');
  btnHomeMobile.classList.remove('current');
  btnAboutMobile.classList.remove('current');
  btnPortfolioMobile.classList.remove('current');
  btnContactMobile.classList.remove('current');
}
function currentPage(page) {
  page.classList.add('current');
}

//menuMobile
btnHomeMobile.addEventListener('click', function(){
  pageHome.style.display = 'initial';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnHomeMobile);
  modileMenu();
})
btnAboutMobile.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'grid';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnAboutMobile);
  modileMenu();
})
btnPortfolioMobile.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'grid';
  pageContact.style.display = 'none';
  currentRemove();
  currentPage(btnPortfolioMobile);
  modileMenu();
})
btnContactMobile.addEventListener('click', function(){
  pageHome.style.display = 'none';
  pageAbout.style.display = 'none';
  pagePortfolio.style.display = 'none';
  pageContact.style.display = 'grid';
  currentRemove();
  currentPage(btnContactMobile);
  modileMenu();
})


container.addEventListener("click", modileMenu);

function modileMenu(e) {
  //this.parentElement.classList.toggle("change");
  menuMobile.classList.toggle("expand");    ul.classList.toggle("appear");
}

//page LEAF COVER
window.addEventListener('load', function(){
  setTimeout(function(){
    leafBottomRight.classList.add('anim_leafBR');
    leafBottomLeft.classList.add('anim_leafBL');
    leafTopRight.classList.add('anim_leafTR');
    leafTopLeft.classList.add('anim_leafTL');
    leafTopMiddle.classList.add('anim_leafTM');
    leafLeftMiddle.classList.add('anim_leafLM');
    pageFrame.classList.add('page__anim--on');
    displayNone(leafBottomRight);
    displayNone(leafBottomLeft);
    displayNone(leafTopRight);
    displayNone(leafBottomRight);
    displayNone(leafTopLeft);
    displayNone(leafTopMiddle);
    displayNone(leafLeftMiddle);
  }, 1000);
})
function displayNone(object) {
  setTimeout(function(){
    object.style.display = 'none';
  }, 1100)
}

//page HOME - language changer
let counter = 0;
setInterval(function(){
  if (counter == 0) {
    counter ++;
    welcomeText.innerHTML = '< BIENVENIDO />';
  }
  else if (counter == 1) {
    welcomeText.innerHTML = '< VELCOMMEN />';
    counter ++;
  }
  else if (counter == 2) {
    welcomeText.innerHTML = '< SVEIKI />';
    counter ++;
  }
  else if (counter == 3) {
    welcomeText.innerHTML = '< ΚΑΛΩΣ ΗΡΘΑΤΕ />';
    counter ++;
  }
  else {
      welcomeText.innerHTML = '< WELCOME />';
      counter = 0;
  }
}, 2800);
