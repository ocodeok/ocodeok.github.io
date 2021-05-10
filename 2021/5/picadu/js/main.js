const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector('.sidebar');
menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("visible");
});