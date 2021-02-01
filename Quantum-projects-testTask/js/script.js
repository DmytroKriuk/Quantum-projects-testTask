function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


if (document.querySelector('.people-slider')) {
    let productSlider = new Swiper('.people-slider__item', {

      slidesPerView: 1,
      spaceBetween: 10,
      //autoHeight: true,
      speed: 800,
      pagination: {
        el: '.people-slider__info',
        type: 'fraction',
      },
      //loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  
}


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body")
console.log(body)

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
  body.classList.toggle("lock");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});