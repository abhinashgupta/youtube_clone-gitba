var menuIcon = document.querySelector(".menu-icon");
var slidebar = document.querySelector(".slidebar");
var container = document.querySelector(".container");
var filters = document.querySelector(".filters");



menuIcon.onclick = function () {
    slidebar.classList.toggle("small-slidebar")
    container.classList.toggle("large-container")
    filters.classList.toggle("filters-small");

}

var user_icon = document.querySelector(".user-icon");
var pclick = document.querySelector(".pclick")
var flag = 0;
user_icon.addEventListener('click', function () {
    if (flag == 0) {
        pclick.style.display = "initial";  
        flag = 1;
    }
    else {
        pclick.style.display = "none"; 
        flag = 0;
    }
})