//import $ from 'jquery';
import Swiper from 'swiper';
var promoSlider = new Swiper('.swiper-container', {

// Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
});
