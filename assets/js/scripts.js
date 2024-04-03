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
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
