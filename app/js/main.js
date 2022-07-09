$(function(){

  const swipercompliment = new Swiper('.swiper-compliment', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiper = new Swiper('.swiper-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  });

});