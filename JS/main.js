
 let menuIcon = document.querySelector('.menu__icon'),
    menuClose = document.getElementById("menu__close"),
    menuOpen = document.getElementById("menu__open"),
    menuListMedia = document.querySelector('.menu__list--media')

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.header__navbar');

    navbar.classList.toggle('nav__sticky', window.scrollY > 0)
})

 menuIcon.addEventListener('click', () =>{
   
    menuListMedia.classList.toggle('menu__media--active')
    menuListMedia.style.display = 'block'

    menuOpen.classList.toggle('menu__icon--active'),
    menuClose.classList.toggle('menu__icon--active')

 } )



let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".carousel__card");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index carousel__card--number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 500); // 1sec



// card slider start
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// slider card 
let slides1 = document.querySelectorAll(".slider__card"),
    span1 = document.querySelectorAll(".card__span"),
    slides2 = document.querySelectorAll(".slider__card2"),
    span2 = document.querySelectorAll(".card__span2")


span1.forEach((item,v)  => {

  function s(i) {
    span1.forEach((itemm,j) => {span1[j].classList.remove('span__active')})
    slides1.forEach((itemn,n) => {slides1[n].classList.remove('slider__card--active')})
    slides1.forEach((itemn,n) => {slides1[n].classList.remove('slider__card2--active')})
    span1[i].classList.add('span__active')

    if(i == 0 ){
      slides1[i].classList.add('slider__card2--active')
    }else {
       slides1[i].classList.add('slider__card--active')
  
     }
  }

  item.addEventListener('click', function() {
    s(v)
  })
  
  

})

span2.forEach((itemk,k) =>{

  function a(c) {

    span2.forEach((itemm,z) => {span2[z].classList.remove('span__active2')})
    slides2.forEach((itemn,x) => {slides2[x].classList.remove('slider__card2--active')})
    slides2.forEach((itemn,x) => {slides2[x].classList.remove('slider__card--active')})
    span2[c].classList.add('span__active2')

   if(c == 0 ){
    slides2[c].classList.add('slider__card2--active')
  }else {
     slides2[c].classList.add('slider__card--active')

   }
  }

  itemk.addEventListener('click', function() {
      // k = itemk[k]
    a(k)    
  })
  
  

})



