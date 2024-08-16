"use strict"
const hamburger = document.querySelector('.burger'),
    headerNavigation = document.querySelector('.menu'),
    headerItems = document.querySelectorAll('.menu_link')

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('burger_active');
    headerNavigation.classList.toggle('menu_active');
})

headerItems.forEach(value =>{
    value.addEventListener('click', () => {
        hamburger.classList.remove('burger_active');
        headerNavigation.classList.remove('menu_active');
    })
})

