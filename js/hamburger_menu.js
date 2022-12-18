// Get hamburger menu element
const hamburgerMenu = document.querySelector(".hamburger-menu")

// Get hamburger menu button element
const hamburgerBtn = document.querySelector("#hamburger-btn");
hamburgerBtn.addEventListener('click', toggleHamburgerMenu)

// Get hamburger menu close button element
const closeHamburgerBtn = document.querySelector("#close-hamburger-menu-btn")
closeHamburgerBtn.addEventListener('click', toggleHamburgerMenu)

function toggleHamburgerMenu() {
    hamburgerMenu.classList.toggle("open");
}

document.onscroll = () => {
    const top = window.scrollY / 16;
    hamburgerMenu.style.marginTop = `${top}rem`;
}