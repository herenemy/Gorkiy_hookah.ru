const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: '3000',
  },
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  loop: false,
  spaceBetween: 15,
  keyboard: {
    enabled: true,
    onlyInViewPort: true,
    pageUpDown: true,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
