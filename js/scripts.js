const swiper = new Swiper('.logo-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  autoplay: {
      delay: 5000,
  },
  // If we need pagination
  pagination: {
      el: '.logo-slider-pagination',
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
          slidesPerView: 4,
          spaceBetween: 40
      }
  },
});