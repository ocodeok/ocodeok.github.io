document.querySelector('#btn-toogle')
    .addEventListener('click', function () {
        const menu = document.querySelector('#main-menu');
        menu.classList.toggle('nav-site--active');
    });

document.querySelector('#btn-toogle')
    .addEventListener('click', function() {
       this.classList.toggle('open');
    });

document.querySelector('#form-order')
    .addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Это демонстрационный сайт. Форма обратной связи не работает');
    });

