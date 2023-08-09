
new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        },
    },
})

const body = document.querySelector('body')
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu-block')
burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        menu.classList.remove('menu-block__active')
        body.classList.remove('menu__opened')
    } else {
        burger.classList.add('active')
        menu.classList.add('menu-block__active')
        body.classList.add('menu__opened')
    }
})
