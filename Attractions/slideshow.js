var slideIndex = 1;
function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("slideimage");
    var containerimg = document.getElementsByClassName("containerimg");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < containerimg.length; i++) {
        containerimg[i].className = containerimg[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    containerimg[slideIndex - 1].className += " active";
}
window.onload = function() {
    showDivs(slideIndex); 
};
