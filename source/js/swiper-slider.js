const swiper = new Swiper('.swiper', {
  // Optional parameters
 // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  keyboard: {
    enablet: true,
    onlyInVieport: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  //autoplay: {
    //delay: 7000,
  //},
});
