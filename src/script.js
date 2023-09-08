let slideIndex = 0;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) {slideIndex = 0}
    slides[slideIndex].style.display = "inline-block";
    slides[slideIndex].classList.add("image");
    slideIndex++;
    setTimeout(showSlides, 5000);
}
