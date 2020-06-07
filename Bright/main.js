const toogleMenu = document.querySelector('#toogle-menu');
const mobileMenu = document.querySelector('#main-menu');

toogleMenu.onclick = function () {
    this.classList.toggle('menu-icon-active');

    mobileMenu.classList.toggle('main-menu--show');
};