// VARIABLES
// pages
const pageHome = document.getElementById('page__home');
const pageAbout = document.getElementById('page__about');
const pagePortfolio = document.getElementById('page__portfolio');
const pageContact = document.getElementById('page__contact');

// buttons
const imgAbout = document.getElementById('img__page--about');

// menu


// FUNCTIONS
// general

// page home

// page about
function pageOpen(){

}
imgAbout.addEventListener('click', function() {
  console.log('hi');
  pageHome.style.display = 'none';
  pageAbout.style.display = 'initial';
});
