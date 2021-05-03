const btnUserShoppingList = document.querySelector("#user-shopping-list");
const modal = document.querySelector("#shopping-list");
const btnModalClose = document.querySelector(".modal-close");

function toggleModal() {
    modal.classList.toggle("modal-is-open")
}

btnUserShoppingList.addEventListener('click', toggleModal);
btnModalClose.addEventListener('click', toggleModal);

new WOW().init();