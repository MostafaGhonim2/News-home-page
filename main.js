let menue = document.querySelector('.menue');
let links = document.querySelector('.links')
menue.onclick = function () {
    if (menue.getAttribute('src') === "assets/images/icon-menu.svg") {
        menue.setAttribute('src', "assets/images/icon-menu-close.svg")
        links.style.display = "unset"
    } else {
        menue.setAttribute('src', "assets/images/icon-menu.svg")
        links.style.display = "none"
    }
}

window.onresize = function () {
    if (window.innerWidth < 750) {
        links.style.display = "none"
    }
    if (window.innerWidth > 750) {
        links.style.display = "flex"
    }
}