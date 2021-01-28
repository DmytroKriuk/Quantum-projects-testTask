


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
