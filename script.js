"use strict";

const menuBtn = document.querySelector("#menu-toggle");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelector("#nav-bar a")

function closeMenu() {
    navBar.classList.remove("open");
    menuBtn.classList.remove("open");
}

menuBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    navBar.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    const isMenuOpen = navBar.classList.contains("open");
    const clickedInsideNav = navBar.contains(e.target);
    const clickedMenuBtn = menuBtn.contains(e.target);

    if (isMenuOpen && !clickedInsideNav && !clickedMenuBtn) {
        closeMenu();
    }
});

navBar.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if(link) {
        closeMenu();
    }
});