var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slide-item');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = 'block';
  setTimeout(showSlides, 8000);
}


//
var caroselIndex = 0;
showCarosel();

function showCarosel() {
  var i;
  var slides = document.getElementsByClassName('feedbacks');
  var dots = document.getElementsByClassName('btn-dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  caroselIndex++;
  if (caroselIndex > slides.length) {caroselIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' bg-primary', '');
  }
  slides[caroselIndex-1].style.display = 'flex';  
  dots[caroselIndex-1].className += ' bg-primary';
  setTimeout(showCarosel, 2000);
}
