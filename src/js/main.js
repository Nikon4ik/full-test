function OpenMenu() {
    document.querySelector(".header__burger").classList.toggle("header__burger-active");
    document.querySelector(".header__menu").classList.toggle("header__menu-active");
    document.querySelector("body").classList.toggle("lock");
}