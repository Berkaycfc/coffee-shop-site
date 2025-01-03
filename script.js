const navitems = document.querySelector(".nav-items")
const queryicons = document.querySelector(".query-icon")

queryicons.addEventListener("click" , function() {
    navitems.classList.toggle('open');
})