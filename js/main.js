$(function () {

  let body = document.querySelector('body');

  // Main block swiper settings
  let mainSwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    speed: 1000
  });

  // Burger menu toggle function
  $('.burger-btn').click(toggleMenu);
  $('.navigation a').click(toggleMenu);

  // Allow or block scroll if burger-menu active
  window.addEventListener('scroll', scrollBlock);
  window.addEventListener('resize', scrollBlock);


  // ---- Functions ----
  // #1 - Burger menu toggle function
  function toggleMenu() {
    $('.navigation').toggleClass('navigation_active');
    $('.burger-btn').toggleClass('burger-btn_active');
    scrollBlock();
  }

  // #2 - Scroll block function
  function scrollBlock() {
    if (body.querySelector('.navigation_active') && screen.width <= 480) {
      body.style.overflow = 'hidden';
    } else body.style.overflow = 'visible';
  }

});