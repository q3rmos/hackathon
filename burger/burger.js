let menuBody = document.querySelector(".menu__body");
let menuBurger = document.querySelector(".menu__burger");

function burgerActive() {
    document.body.classList.toggle("_lock");
    menuBody.classList.toggle("_enable");
    menuBurger.classList.toggle("_enable");
}
