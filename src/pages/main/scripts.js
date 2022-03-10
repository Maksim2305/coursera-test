var html = document.querySelector("html");
var popupButtonClose = document.querySelector("#popup-close-button");
var popupButtonOpen = document.querySelector(".collection__button");

popupButtonOpen.addEventListener("click", function(){
    html.classList.add("popup-open");
    popupButtonClose.focus();
});

popupButtonClose.addEventListener("click", function(){
    html.classList.remove("popup-open");
});


var mobileMenuOpen = document.querySelector(".open-mobile-popup");
var mobileMenuClose = document.querySelector(".close-mobile-popup");


mobileMenuOpen.addEventListener("click", function(){
    html.classList.toggle("hide-menu");
    html.classList.toggle("active");
});

mobileMenuClose.addEventListener("click", function(){
    html.classList.toggle("hide-menu");
    html.classList.toggle("active");
});



function funk (string) {
    var newString = string.toUpperCase();
    return newString;
}

funk ('Hello');

function shortcut (string) {
    var newString = string.removeLetters();
    return newString;
  }

  shortcut ('vsdffs sfsd sfdds3t23fs');