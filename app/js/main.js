$(function(){

  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navItems = nav?.querySelectorAll('.header__nav-item, .header__nav-login');
  const body = document.body;
  const header = document?.querySelector('.header');
  const headerHeight = header.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

  burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
  });

  navItems.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      nav?.classList.remove('nav--visible');
    });
  });

  const swipercompliment = new Swiper('.swiper-compliment', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1201: {
        slidesPerView: 3,
      },
    }
  });

  const swiper = new Swiper('.swiper-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

});