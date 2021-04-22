var slideIndex = 0;

var slides = document.getElementsByClassName("slideComponent");
var dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";  
    }
    ++slideIndex;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    for (let i = 0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();