// VARIABLES

//cover leaves
const leafTopRight = document.querySelector('.plant__top--right');
const leafBottomLeft = document.querySelector('.plant__bottom--left');
const leafBottomRight = document.querySelector('.plant__bottom--right');
const leafTopLeft = document.querySelector('.plant__top--left');
const leafTopMiddle = document.querySelector('.plant__top--middle');
const leafLeftMiddle = document.querySelector('.plant__left--middle');


//pages
const pageHome = document.getElementById('page__home');
const pageAbout = document.getElementById('page__about');
const pagePortfolio = document.getElementById('page__portfolio');
const pageContact = document.getElementById('page__contact');
const welcomeText = document.getElementById('text__greeting');


//buttons
const imgAbout = document.getElementById('img__page--about');
const imgPortfolio = document.getElementById('img__page--portfolio');
const imgContact = document.getElementById('img__page--contact');
const btnExit = document.querySelector('.btn__exit');

//menu


// FUNCTIONS

//general

//menu
btnExit.addEventListener('click', function(){
    pageHome.style.display = 'block';
    pageAbout.style.display = "none";
    pagePortfolio.style.display = "none";
})

//page LEAVES COVER
window.addEventListener('load', function(){
  setTimeout(function(){
    leafBottomRight.classList.add('anim_leafBR');
    leafBottomLeft.classList.add('anim_leafBL');
    leafTopRight.classList.add('anim_leafTR');
    leafTopLeft.classList.add('anim_leafTL');
    leafTopMiddle.classList.add('anim_leafTM');
    leafLeftMiddle.classList.add('anim_leafLM');
  }, 1000);
})

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

// images directing to other pages
imgAbout.addEventListener('click', function() {
  pageHome.style.display = 'none';
  pageAbout.style.display = 'grid';
});
imgPortfolio.addEventListener('click', function() {
  pageHome.style.display = 'none';
  pagePortfolio.style.display = 'grid';
});
imgContact.addEventListener('click', function() {
  pageHome.style.display = 'none';
  pageContact.style.display = 'grid';
});
//page about
