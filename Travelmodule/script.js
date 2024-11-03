function ch()
{
    window.location.assign("train.html");

}
function toggleNav() {
    var slide = document.getElementById("slide");
    
    
    var bar = document.getElementById("bar");
    bar.classList.toggle("active");
    if (slide.style.width === "220px") {
        slide.style.width = "0"; // Hide the side nav
    } else {
        slide.style.width = "220px"; // Show the side nav
    }
}
function ch2()
{
    window.location.assign("cab.html");

}
function ch3()
{
    window.location.assign("busweb.html");

}
function change3()
{
    window.location.assign("plan1.html");
    
}
function openpackages() {
    var packageDiv = document.getElementById("mainpackage");
    
    // Check if the division is already shown
    if (packageDiv.classList.contains("show")) {
        packageDiv.classList.remove("show");
        packageDiv.classList.add("hide");
    } else {
        packageDiv.classList.remove("hide");
        packageDiv.classList.add("show");
    }
}

function setdefault() {
    var packageDiv = document.getElementById("mainpackage");
    packageDiv.classList.remove("show");   // Only remove 'show' to hide
    packageDiv.classList.add("hide");``
}
