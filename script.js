let slideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function moveSlide(step){
    slideIndex += step;
    showSlide(slideIndex);
}

showSlide(slideIndex);

