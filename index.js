var iconMenu = document.querySelector(".icon-menu");
var dropMenu = document.querySelector(".drop-menu");
var menuButton = document.querySelector(".menu-button");

iconMenu.addEventListener("click", (e) => {
    document.body.classList.add("click")
    dropMenu.style.display = "block";
    dropMenu.classList.add("show");
});

menuButton.addEventListener("click", (e) => {
    document.body.classList.remove("click");
    dropMenu.style.display = "none";
});