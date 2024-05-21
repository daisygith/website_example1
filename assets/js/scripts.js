// toggle icon navbar
const navEl = document.querySelector('.main-navigation');
const hamburgerEl = document.querySelector('.hamburger');
const mainPageEl = document.querySelector('.element-main-page');
const pageEl = document.querySelector('.elements-page');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('main-navigation--open');
    hamburgerEl.classList.toggle('hamburger--open');
});


window.onscroll = () => {

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

// change color depends on page
const locationHref = window.location.href;

const links = document.querySelectorAll('header nav ul li');

links.forEach((link) => {
    const attr = link.getAttribute('data-text');
    if(locationHref.includes(attr)){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});