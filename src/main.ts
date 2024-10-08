import { Swiper } from 'swiper';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import IMask from 'imask';

Swiper.use([Parallax, Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
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
      prevEl: '.swiper-button-prev',
    },
  });

  // @ts-ignore
  new Swiper('.catalog__item__slider', {
    loop: true,
  });

  // @ts-ignore
  new Swiper('.mobile-benefit', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // @ts-ignore
  new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const burger = document.getElementById('burger');
  const hiddenMenu = document.getElementById('hidden-content');
  const header = document.getElementById('header');
  // @ts-ignore
  burger.addEventListener('click', () => {
    hiddenMenu?.classList.toggle('--open__content');
    header?.classList.toggle('--open');
  });

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header?.classList.add('--blur');
    } else {
      header?.classList.remove('--blur');
    }
  });

  // Применение маски для телефона
  const phoneInput = document.getElementById('phone');

  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
    lazy: false, // Показывать маску сразу
    placeholderChar: '_',
    definitions: {
      '0': {
        mask: /[0-9]/, // Допустимые символы для маски
      },
    },
  };

  phoneInput && IMask(phoneInput, maskOptions);
});

const constraints = {
  name: {
    presence: { allowEmpty: false, message: 'Поле обязательно для заполнения' },
  },
  phone: {
    presence: { allowEmpty: false, message: 'Поле обязательно для заполнения' },
    format: {
      pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      message: 'Введите корректный номер телефона',
    },
  },
};

// @ts-ignore
document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  // @ts-ignore
  const values = validate.collectFormValues(form);

  // @ts-ignore
  const errors = validate(values, constraints);

  // Очищаем старые ошибки
  document.querySelectorAll('.input__wrapper .error-message').forEach((el) => el.remove());

  if (errors) {
    // Если есть ошибки, проходимся по ним и выводим их в соответствующие input__wrapper
    // @ts-ignore
    Object.keys(errors).forEach(function (key) {
      // @ts-ignore
      const wrapper = document.getElementById(key).closest('.input__wrapper');
      if (wrapper) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.style.position = 'absolute';
        error.style.top = '53px';
        error.style.marginTop = '4px';
        error.innerText = errors[key].join(', ');
        wrapper.appendChild(error);
      }
    });
  } else {
    const simpleFormWindow = document.getElementById('form__simple__window');
    const successFormWindow = document.getElementById('form__success__window');
    successFormWindow?.classList.toggle('--active');
    simpleFormWindow?.classList.toggle('--active');
  }
});
