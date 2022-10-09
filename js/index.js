const menu = document.getElementById("menu");
const sideNav = document.querySelector(".side-nav");

menu.addEventListener("click", (() => {
    if(!sideNav.classList.contains("show")) {
        sideNav.classList.add("show");
        menu.setAttribute('src', "../images/icon-close.svg")
        sideNav.style.transform = "scaleX(1)"
    }else {
        sideNav.classList.remove("show")
        menu.setAttribute('src', "../images/icon-hamburger.svg")
        sideNav.style.transform = "scaleX(0)"
    }
}))
