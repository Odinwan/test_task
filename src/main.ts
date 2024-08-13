import { Swiper } from 'swiper';
import { Navigation, Pagination, Parallax } from 'swiper/modules';

Swiper.use([Parallax, Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', (event) => {
  // @ts-ignore
  new Swiper('.swiper-container', {
    loop: true,
    observer: true,
    observeParents: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });


  // @ts-ignore
  new Swiper('.catalog__item__slider', {
    loop: true
  });

  // @ts-ignore
  new Swiper(".mobile-benefit", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // @ts-ignore
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const burger = document.getElementById('burger');
  const hiddenMenu = document.getElementById('hidden-content');
  const header = document.getElementById('header');
  burger.addEventListener('click', () => {
    hiddenMenu.classList.toggle('--open__content')
    header.classList.toggle('--open');
  });

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('--blur');
    } else {
      header.classList.remove('--blur');
    }
  });
});
