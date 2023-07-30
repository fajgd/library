const burger = document.querySelector('.header_burger')
const menu = document.querySelector('.menu-block')
const body = document.querySelector('body')
const menuElement1 = document.querySelector('.link_1')
const menuElement2 = document.querySelector('.link_2')
const menuElement3 = document.querySelector('.link_3')
const menuElement4 = document.querySelector('.link_4')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('menu__opened')
})

menuElement1.addEventListener('click', ()=> {
    if (menu.classList.contains('active')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('menu__opened')
    } else {
        console.log('1')
    }
})

menuElement2.addEventListener('click', ()=> {
    if (menu.classList.contains('active')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('menu__opened')
    } else {
        console.log('1')
    }
})
menuElement3.addEventListener('click', ()=> {
    if (menu.classList.contains('active')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('menu__opened')
    } else {
        console.log('1')
    }
})
menuElement4.addEventListener('click', ()=> {
    if (menu.classList.contains('active')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('menu__opened')
    } else {
        console.log('1')
    }
})

// menuElement.addEventListener('click', (event) => {
//     event.preventDefault()
// })
