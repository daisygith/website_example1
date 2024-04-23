// toggle icon navbar
const navEl = document.querySelector('.main-navigation');
const hamburgerEl = document.querySelector('.hamburger');
const mainPageEl = document.querySelector('.element-main-page');
const pageEl = document.querySelector('.elements-page');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('main-navigation--open');
    hamburgerEl.classList.toggle('hamburger--open');
});
// navEl.addEventListener('click', () => {
//     navEl.classList.remove('main-navigation--open');
//     hamburgerEl.classList.remove('hamburger--open');
// });


//scroll section
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav ul li a');

window.onscroll = () => {
    // sections.forEach(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 100;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');
    //
    //     if
    // });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
